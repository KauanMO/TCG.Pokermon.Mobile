import React, { useEffect, useState } from "react";
import { DeckInfo } from "../types/DeckType";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Constants from "../utils/Constants";
import GoBackIcon from "../components/Icons/GoBackIcon";
import Decks from "../api/decks";

export default function DecksManagerScreen() {
    const [myDecks, setMyDecks] = useState<DeckInfo[]>();

    useEffect(() => {
        async function getMyDecks() {
            const response = await Decks.getMycards();

            setMyDecks(response);
        }

        getMyDecks();
    }, []);

    return <View style={styles.container}>
        <GoBackIcon />

        {
            myDecks && myDecks[0] && myDecks.map(deck => {
                return <View>
                    <Text>{deck.name}</Text>
                </View>
            })
        }
    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height
    },
});