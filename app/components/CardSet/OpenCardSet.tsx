import React, { useEffect, useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Cards from "../../api/cards";
import { CardInfo } from "../../types/CardType";
import HoloEffect from "../Card/HoloEffect";
import Modal from 'react-native-modal';
import Pokedollar from "../Currency/Pokedollar";
import users from "@/app/api/users";
import InputSpinner from 'react-native-input-spinner';

type Props = {
    cardSetId: number,
    price: number
}

export default function OpenCardSet(props: Props) {
    const [buyAmount, setBuyAmount] = useState<any>(1);
    const [currentCardPosition, setCurrentCardPosition] = useState<number>(-1);
    const [buyModalOpen, setBuyModalOpen] = useState<boolean | undefined>(false);
    const [cardsOpenned, setCardsOpenned] = useState<CardInfo[]>([]);
    const [userBalance, setUserBalance] = useState<number>(0);

    const sendBuyRequest = async (): Promise<void> => {
        const cards: CardInfo[] = await Cards.openCardSet(props.cardSetId, buyAmount);

        setCardsOpenned(cards);
        setCurrentCardPosition(cards.length - 1);
        setBuyModalOpen(false);
    }

    const nextCard = (): void => {
        setCurrentCardPosition(currentCardPosition - 1);
    }

    useEffect(() => {
        const getUserBalance = async (): Promise<void> => {
            const response = await users.getUserInfo();

            setUserBalance(response?.balance ?? 0);
        }

        getUserBalance();
    }, []);

    return <View style={styles.container}>
        <Modal isVisible={buyModalOpen}>
            <View style={styles.buy_modal}>
                <View style={styles.modal_buy_info}>
                    <View>
                        <Text>Seu saldo: </Text>
                        <Pokedollar value={userBalance} coinSize={24} />
                    </View>

                    <View>
                        <Text>Preço final: </Text>
                        <Pokedollar value={props.price * buyAmount} coinSize={24} />
                    </View>

                    <View>
                        <Text>Novo saldo: </Text>
                        <Pokedollar value={userBalance - props.price * buyAmount} coinSize={24} />
                    </View>
                </View>

                <View>
                    <Text>Quantidade:</Text>
                    <InputSpinner
                        min={1}
                        onChange={v => setBuyAmount(v)}
                        maxLength={3}
                        style={{
                            width: '80%'
                        }}
                        skin="round"
                    />
                </View>

                <View style={styles.modal_buttons_container}>
                    <Button color={'green'} title="Confirmar" onPress={() => sendBuyRequest()} />
                    <Button color={'red'} title="Cancelar" onPress={() => setBuyModalOpen(false)} />
                </View>
            </View>
        </Modal>

        {
            cardsOpenned[0] != null && currentCardPosition >= 0 &&
            <Pressable onPress={nextCard} style={styles.opened_cardset}>
                <View>
                    <View style={styles.cards_container}>
                        <View>
                            <Image
                                src={cardsOpenned[currentCardPosition].images.large}
                                style={{
                                    width: 330,
                                    height: 500,
                                    borderRadius: 14,
                                }}
                                resizeMode="contain"
                            />
                            {
                                cardsOpenned[currentCardPosition].rarity.includes('Holo') &&
                                <HoloEffect
                                    width={400}
                                    height={100}
                                />
                            }
                        </View>
                    </View>
                </View>
            </Pressable>
        }

        <View style={styles.buyButton}>
            <Button title="Comprar" onPress={() => setBuyModalOpen(true)} />
        </View>
    </View >
}

const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0
        },
        buyButton: {
            flex: 1,
            justifyContent: 'flex-end',
            bottom: 16
        },
        opened_cardset: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
        },
        cards_container: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        buy_modal: {
            flex: 1,
            backgroundColor: 'white',
            maxHeight: '40%',
            width: '80%',
            alignSelf: 'center',
            borderRadius: 16,
            display: 'flex',
            gap: 16,
            padding: 16
        },
        modal_buy_info: {
            display: 'flex',
            gap: 5
        },
        modal_buttons_container: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            gap: 10
        },
        modal_button: {
            display: 'flex',
        }
    });