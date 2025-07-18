import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CardDisplay from "../components/Card/CardDisplay";
import { CardInfo, CardsInfoAndTotalCount } from "../types/CardType";
import Cards from "../api/cards";
import DropDown from "../components/DropDown";
import { CardsFiltersApplied } from "../types/Filters";
import PageController from "../components/PageController/PageController";
import GlobalVariables from "../utils/GlobalVariables";
import Constants from "../utils/Constants";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";

export default function CardsScreen() {
    const navigate = useNavigation();
    const [cardsToDisplay, setCardsToDisplay] = useState<CardInfo[]>([]);
    const [filtersApplied, setFiltersApplied] = useState<CardsFiltersApplied | null>(null);
    const [page, setPage] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);

    useEffect(() => {
        const requestMyCards = async (): Promise<void> => {
            const response: CardsInfoAndTotalCount = await Cards.getMyCards(filtersApplied, page);

            setCardsToDisplay(response.cards);
            setTotalPageCount(Math.ceil(response.totalCards / GlobalVariables.myCardsDisplayCount));
        }

        requestMyCards();
    }, [filtersApplied, page]);

    const handleCardTypesFilter = (types: string[] | null) => {
        setFiltersApplied({
            asc: filtersApplied?.asc ?? null,
            orderBy: filtersApplied?.orderBy ?? null,
            types
        });
    }

    const updateCardsSelleds = (ids: number[]) => setCardsToDisplay(cardsToDisplay.filter(c => c.id && !ids.includes(c.id)))

    function onChangeOrderFilter(order: string) {
        const [orderBy, asc]: ['name' | 'price', boolean] = (() => {
            const [field, direction] = order.split(' ') as ['name' | 'price', string];

            return [field, direction.includes('asc')];
        })();

        setFiltersApplied({
            types: filtersApplied?.types ?? [],
            asc,
            orderBy
        });
    }

    return <View style={styles.container}>
        <View style={styles.filters_container}>
            <View style={styles.cards_order_container}>
                <DropDown.CardsOrderDropDownPicker onChangeValue={onChangeOrderFilter} />
            </View>
            <View>
                <DropDown.CardTypesDropDownPicker onChangeItems={handleCardTypesFilter} />
            </View>
        </View>

        <CardDisplay
            cards={cardsToDisplay}
            internal={true}
            marginTop={10}
            cardWidth={85}
            rowCount={4}
            cardsSelled={updateCardsSelleds}
        />

        <PageController
            page={page}
            setCardsPage={setPage}
            totalPage={totalPageCount}
        />

        <Button onPress={() => navigate.navigate('DecksManager' as never)} style={styles.manage_decks_button}>
            <Text>Gerenciar decks</Text>
        </Button>
    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height
    },
    filters_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        margin: 8,
        alignContent: 'center',
        justifyContent: 'center'
    },
    cards_order_container: {

    },
    filter_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        fontSize: 16,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        backgroundColor: '#292d3e'
    },
    filter_text: {
        color: '#bfc7d5'
    },
    manage_decks_button: {
        backgroundColor: 'blue'
    }
});