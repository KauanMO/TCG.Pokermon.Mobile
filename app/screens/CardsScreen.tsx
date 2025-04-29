import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CardDisplay from "../components/Card/CardDisplay";
import { CardInfo } from "../types/CardType";
import Cards from "../api/cards";

export default function CardsScreen() {
    const [myCards, setMyCards] = useState<CardInfo[]>();
    const [cardsToDisplay, setCardsToDisplay] = useState<CardInfo[]>();

    useEffect(() => {
        const requestMyCards = async (): Promise<void> => {
            const cards: CardInfo[] = await Cards.getMyCards();

            setMyCards(cards);
            setCardsToDisplay(cards);
        }

        requestMyCards();
    }, [])

    return <View>
        <Text>Minhas cartas</Text>

        <CardDisplay cards={myCards} internal={true} marginTop={10} />
    </View>
}