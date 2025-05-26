import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardDisplay from "../components/Card/CardDisplay";
import { CardInfo, CardsInfoAndTotalCount } from "../types/CardType";
import Cards from "../api/cards";
import DropDown from "../components/DropDown";
import { CardsFiltersApplied } from "../types/Filters";
import PageController from "../components/PageController/PageController";
import GlobalVariables from "../utils/GlobalVariables";

export default function CardsScreen() {
    const [cardsToDisplay, setCardsToDisplay] = useState<CardInfo[]>([]);
    const [filtersApplied, setFiltersApplied] = useState<CardsFiltersApplied | null>(null);
    const [page, setPage] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(4);

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

    const styles = StyleSheet.create({
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
        }
    });

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

    return <View>
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
            cardWidth={93.75}
            cardHeight={125}
            rowCount={4}
        />

        <PageController
            page={page}
            setCardsPage={setPage}
            totalPage={totalPageCount}
        />
    </View>
}