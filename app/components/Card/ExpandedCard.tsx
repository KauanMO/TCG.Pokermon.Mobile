import { CardInfo } from "@/app/types/CardType";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import Pokedollar from "../Currency/Pokedollar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Users from "@/app/api/users";
import { Button } from "react-native-paper";
import Cards from "@/app/api/cards";

const { width, height } = Dimensions.get('window');

export type Props = {
    card: CardInfo,
    setExpanded: Function,
    internal?: boolean,
    cardsObtainedCount?: number,
    cardsSelled: Function
}

export default function ExpandedCard(props: Props) {
    const [sellCardModalOpen, setSellCardModalOpen] = useState<boolean>(false)

    return <>
        <Pressable onPress={() => props.setExpanded()} style={styles.overlay}>
            <Text style={[styles.card_name, styles.card_text]}>{props.card.name}</Text>
            <Card
                image={props.card.images.large}
                width={width * 0.65}
                onPress={() => props.setExpanded()}
            />
            <View style={styles.card_info_container}>
                <View style={styles.card_price}>
                    <Pokedollar textColor="white" value={props.card.price} textSize={20} coinSize={20} />
                </View>
                <View>
                    <Text style={[styles.card_info_text, styles.card_text]}>{props.card.rarity}</Text>
                </View>
                {
                    props.cardsObtainedCount !== undefined && <View>
                        <Text style={[styles.card_info_text, styles.card_text]}>({props.cardsObtainedCount})</Text>
                    </View>
                }
                {
                    props.internal && <View>
                        <Text style={[styles.card_info_text, styles.card_text]}>Qualidade: {props.card.quality}</Text>
                        {
                            props.card.evolvesFrom &&
                            <Text style={[styles.card_info_text, styles.card_text]}>Evolui de: {props.card.evolvesFrom}</Text>
                        }
                        {
                            props.card.description &&
                            <Text style={[styles.card_info_text, styles.card_text]}>{props.card.description}</Text>
                        }
                        <Text style={[styles.card_info_text, styles.card_text]}>
                            Tipos: {props.card.types?.join(', ') ?? ''}
                        </Text>
                        <Text style={[styles.card_info_text, styles.card_text]}>
                            Subtipos: {props.card.subTypes?.join(', ') ?? ''}
                        </Text>
                        <Pressable onPress={() => setSellCardModalOpen(true)} style={styles.sell_card_icon}>
                            <Icon name="delete-outline" size={30} color={'white'} />
                        </Pressable>
                    </View>
                }
            </View>
        </Pressable>

        {sellCardModalOpen && <SellCardsModal cards={[props.card]} closeSellCardModal={() => setSellCardModalOpen(false)} cardSelled={(ids: number[]) => props.cardsSelled(ids)} />}
    </>
}

function SellCardsModal({ cards, closeSellCardModal, cardSelled }: { cards: CardInfo[], closeSellCardModal: Function, cardSelled: Function }) {
    const sendSellCardsRequest = () => {
        Cards.sellCardById(cards.map(c => c.id))

        cardSelled(cards.map(c => c.id))
    }

    const cardsTotalValue = cards.reduce((acc, card) => acc + card.price, 0)

    return <Pressable onPress={() => closeSellCardModal()} style={styles.overlay}>
        <View style={styles.sell_cards_modal}>
            <Text>Tem certeza?</Text>

            <Text>Seu saldo:</Text>
            <Pokedollar textColor="black" value={Users.userInfo?.balance ?? 0} textSize={20} coinSize={20} />

            <Text>Valor da carta:</Text>
            <Pokedollar textColor="black" value={cardsTotalValue} textSize={20} coinSize={20} />

            <Text>Novo saldo:</Text>
            <Pokedollar textColor="black" value={Users.userInfo?.balance ?? 0 + cardsTotalValue} textSize={20} coinSize={20} />

            <View style={styles.sell_cards_buttons_container}>
                <Button buttonColor="green" onPress={() => sendSellCardsRequest()} >Confirmar</Button>
                <Button buttonColor="red" onPress={() => { }} >Cancelar</Button>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    card_name: {
        fontSize: 24,
        marginBottom: 16
    },
    card_info_container: {
        display: 'flex',
        alignItems: 'center'
    },
    card_text: {
        color: 'white',
    },
    card_info_text: {
        fontSize: 16,
    },
    card_price: {
        marginTop: 16
    },
    sell_card_icon: {
        backgroundColor: 'red',
        borderRadius: '50%',
        alignSelf: 'center',
        padding: 4
    },
    sell_cards_modal: {
        flex: 1,
        backgroundColor: 'white',
        maxHeight: '40%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 16,
        gap: 16,
        padding: 16
    },
    sell_cards_buttons_container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 10
    }
})