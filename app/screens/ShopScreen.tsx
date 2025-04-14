import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CardSetInfo } from "../types/CardSetType";
import cardsets from "../api/cardsets";
import CardSetDisplay from "../components/CardSet/CardSetDisplay";

export default function ShopScreen() {
    const [cardSets, setCardSets] = useState<CardSetInfo[]>([])

    useEffect(() => {
        const requestCardSets = async (): Promise<void> => {
            const response: CardSetInfo[] = await cardsets.getCardSets();

            setCardSets(response);
        }

        requestCardSets();
    }, []);

    return <View>
        <Text>Figurinhas</Text>
        
        <CardSetDisplay sets={cardSets} />
    </View>
}