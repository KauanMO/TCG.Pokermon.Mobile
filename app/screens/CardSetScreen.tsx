import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GoBackIcon from "../components/Icons/GoBackIcon";
import { CardSetCards } from "../types/CardSetType";
import CardSets from "../api/cardsets";
import GlobalVariables from "../utils/GlobalVariables";
import CardDisplay from "../components/Card/CardDisplay";

export default function CardSetScreen({ id }: { id: number }) {
    const [cardSetInfo, setCardSetInfo] = useState<CardSetCards>();
    const [cardsPage, setCardsPage] = useState(1);
    const [cardsTotalPages, setCardsTotalPages] = useState(0);

    useEffect(() => {
        const requestCardSetById = async () => {
            const response = await CardSets.getCardSetById(id, cardsPage);

            setCardSetInfo(response);
            setCardsTotalPages(Math.ceil(response.totalCount / GlobalVariables.cardsDisplayCount));
        }

        requestCardSetById();
    }, []);

    const styles = StyleSheet.create({
        cardSetLogo: {
            width: 200,
            height: 50,
            position: 'absolute',
            top: 0,
            left: 100
        },
        pageController: {
            flexDirection: 'row',
            gap: 6,
            fontSize: 24,
            width: '100%',
            justifyContent: 'center',
            marginTop: 20
        }
    });

    return <View>
        <GoBackIcon />

        <Image
            src={cardSetInfo?.cardSet.logo}
            style={styles.cardSetLogo}
        />

        <CardDisplay
            cards={cardSetInfo?.cards}
            internal={false}
            marginTop={70}
        />

        {
            // TO-DO that two onpress expresions is not working
        }
        <View style={styles.pageController}>
            <Text onPress={() => { if (cardsPage - 1 > 0) setCardsPage(cardsPage - 1) }}>{'<'}</Text>
            <Text>Página {cardsPage}/{cardsTotalPages}</Text>
            <Text onPress={() => { if (cardsPage + 1 <= 0) setCardsPage(cardsPage + 1) }}>{'>'}</Text>
        </View>
    </View>
}