import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { CardSetInfo } from "../types/CardSetType";
import cardsets from "../api/cardsets";
import CardSetDisplay from "../components/CardSet/CardSetDisplay";
import Constants from "../utils/Constants";

export default function ShopScreen() {
    const [cardSets, setCardSets] = useState<CardSetInfo[]>([])

    useEffect(() => {
        const requestCardSets = async (): Promise<void> => {
            const response: CardSetInfo[] = await cardsets.getCardSets();

            setCardSets(response);
        }

        requestCardSets();
    }, []);

    return <View style={styles.container}>
        <CardSetDisplay sets={cardSets} />
    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height
    }
});