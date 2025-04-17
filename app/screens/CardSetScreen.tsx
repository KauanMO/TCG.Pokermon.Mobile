import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import GoBackIcon from "../components/Icons/GoBackIcon";
import { CardSetCards } from "../types/CardSetType";
import CardSets from "../api/cardsets";
import GlobalVariables from "../utils/GlobalVariables";
import CardDisplay from "../components/Card/CardDisplay";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/ParamList";

export default function CardSetScreen() {
    const [cardSetInfo, setCardSetInfo] = useState<CardSetCards>();
    const [cardsPage, setCardsPage] = useState(1);
    const [cardsTotalPages, setCardsTotalPages] = useState(0);

    const route = useRoute<RouteProp<RootStackParamList, 'CardSet'>>();

    const { id } = route.params ?? {};

    useEffect(() => {
        const requestCardSetById = async () => {
            const response = await CardSets.getCardSetById(id as number, cardsPage);

            setCardSetInfo(response);
            setCardsTotalPages(Math.ceil(response.totalCount / GlobalVariables.cardsDisplayCount));
        }

        requestCardSetById();
    }, [cardsPage]);

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        cardSetLogo: {
            width: 200,
            height: 50,
            position: 'absolute',
            top: 10,
            left: 100
        },
        pageController: {
            flexDirection: 'row',
            gap: 6,
            fontSize: 24,
            width: '100%',
            justifyContent: 'center',
            marginTop: 20
        },
        pageControllerText: {
            fontSize: 20
        }
    });

    const nextPage = () => {
        if (cardsPage + 1 <= cardsTotalPages) setCardsPage(cardsPage + 1);
    }

    const backPage = () => {
        if (cardsPage - 1 > 0) setCardsPage(cardsPage - 1);
    }

    return <View style={styles.container}>
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

        <View style={styles.pageController}>
            <TouchableOpacity onPress={backPage}>
                <Text style={styles.pageControllerText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.pageControllerText}>Página {cardsPage}/{cardsTotalPages}</Text>
            <TouchableOpacity onPress={nextPage}>
                <Text style={styles.pageControllerText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    </View>
}