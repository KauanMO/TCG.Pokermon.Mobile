import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import GoBackIcon from "../components/Icons/GoBackIcon";
import { CardSetCards } from "../types/CardSetType";
import CardSets from "../api/cardsets";
import GlobalVariables from "../utils/GlobalVariables";
import CardDisplay from "../components/Card/CardDisplay";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/ParamList";
import OpenCardSet from "../components/CardSet/OpenCardSet";
import PageController from "../components/PageController/PageController";
import Pokedollar from "../components/Currency/Pokedollar";
import Constants from "../utils/Constants";
import { Dimensions } from "react-native";
import Cards from "../api/cards";
import { CardsObtainedCount } from "../types/CardType";

export default function CardSetScreen() {
    const [cardSetInfo, setCardSetInfo] = useState<CardSetCards>();
    const [cardsPage, setCardsPage] = useState(0);
    const [cardsTotalPages, setCardsTotalPages] = useState(0);
    const [cardsObtainedCount, setCardsObtainedCount] = useState<CardsObtainedCount[] | []>([]);

    const route = useRoute<RouteProp<RootStackParamList, 'CardSet'>>();

    const { id } = route.params ?? {};

    useEffect(() => {
        const requestCardSetById = async () => {
            const response = await CardSets.getCardSetById(id as number, cardsPage);

            setCardSetInfo(response);
            setCardsTotalPages(Math.ceil(response.totalCount / GlobalVariables.shopCardsDisplayCount));
        }

        const requestCardsObtained = async () => {
            const response = await Cards.cardsObtainedSet(id as number);

            setCardsObtainedCount(response);
        }

        requestCardSetById();
        requestCardsObtained();
    }, [cardsPage]);

    return <View style={styles.container}>
        <GoBackIcon />

        <Image
            src={cardSetInfo?.cardSet.logo}
            style={styles.cardSetLogo}
            resizeMode="contain"
        />

        <Pokedollar
            value={cardSetInfo?.cardSet.price ?? 0}
            coinSize={24}
            position="absolute"
            right={16}
            top={16}
        />

        <CardDisplay
            cards={cardSetInfo?.cards}
            internal={false}
            marginTop={70}
            gap={4}
            cardsObtainedCount={cardsObtainedCount}
        />

        <PageController page={cardsPage} setCardsPage={setCardsPage} totalPage={cardsTotalPages} />

        <OpenCardSet price={cardSetInfo?.cardSet.price ?? 0} cardSetId={id as number} />
    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height,
        position: 'relative'
    },
    cardSetLogo: {
        width: 200,
        height: 50,
        position: 'absolute',
        top: 10,
        left: 100,
        flex: 1
    }
});