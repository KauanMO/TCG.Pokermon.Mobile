import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import Cards from "../../api/cards";
import { CardInfo } from "../../types/CardType";
import HoloEffect from "../Card/HoloEffect";

type Props = {
    cardSetId: number
}

export default function OpenCardSet({ cardSetId }: Props) {
    const [buyAmount, setBuyAmount] = useState<any>(1);
    const [currentCardPosition, setCurrentCardPosition] = useState<number>(-1);

    const [cardsOpenned, setCardsOpenned] = useState<CardInfo[]>([]);

    const sendBuyRequest = async (): Promise<void> => {
        const cards: CardInfo[] = await Cards.openCardSet(cardSetId, buyAmount);

        setCardsOpenned(cards);
        setCurrentCardPosition(cards.length - 1);

        console.log(currentCardPosition);
    }

    const nextCard = (): void => {
        setCurrentCardPosition(currentCardPosition - 1);
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
        }
    });

    return <View style={styles.container}>
        {
            cardsOpenned[0] != null && currentCardPosition >= 0 &&
            < Pressable onPress={nextCard} style={styles.opened_cardset}>
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
            <TextInput
                keyboardType="numeric"
                placeholder="Quantidade"
                onChangeText={amount => setBuyAmount(Number(amount))}
            />

            <Button title="Comprar" onPress={sendBuyRequest} />
        </View>
    </View >
}