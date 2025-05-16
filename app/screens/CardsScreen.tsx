import React, { ReactElement, useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import CardDisplay from "../components/Card/CardDisplay";
import { CardInfo } from "../types/CardType";
import Cards from "../api/cards";
import Icon from "react-native-vector-icons/AntDesign";
import DropDown from "../components/DropDown";

type Filter = {
    name: string,
    asc: boolean,
    sortFn: (a: CardInfo, b: CardInfo, asc: boolean) => number;
}

export default function CardsScreen() {
    const [myCards, setMyCards] = useState<CardInfo[]>([]);
    const [cardsToDisplay, setCardsToDisplay] = useState<CardInfo[]>([]);

    useEffect(() => {
        const requestMyCards = async (): Promise<void> => {
            const cards: CardInfo[] = await Cards.getMyCards();

            setMyCards(cards);
            setCardsToDisplay(cards);
        }

        requestMyCards();
    }, []);

    const [filters, setFilters] = useState<Filter[]>([
        {
            name: 'Valor',
            asc: true,
            sortFn: (a, b, asc) => asc ? a.price - b.price : b.price - a.price
        },
        {
            name: 'Nome',
            asc: true,
            sortFn: (a, b, asc) =>
                asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        }
    ]);

    const handleFilterClick = (index: number) => {
        setFilters(prev => {
            const newFilters = [...prev];

            const filter = newFilters[index];

            filter.asc = !filter.asc;

            const sorted = [...cardsToDisplay].sort((a, b) =>
                filter.sortFn(a, b, filter.asc)
            );

            setCardsToDisplay(sorted);

            return newFilters;
        });
    }

    const handleCardTypesFilter = (types: string[] | null) => {
        if (types === null || !types[0]) return setCardsToDisplay(myCards);

        const result = myCards.filter(card =>
            types.every(type => card.types.includes(type))
        );

        setCardsToDisplay(result);
    }

    const styles = StyleSheet.create({
        filter_container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            fontSize: 16,
            alignContent: 'center',
            height: 30
        },
        filter_text: {
            fontSize: 20
        }
    });

    return <View>
        <Text>Minhas cartas</Text>

        {
            filters.map((filter, index) => {
                return <Pressable style={styles.filter_container} key={filter.name} onPress={() => handleFilterClick(index)}>
                    <Text style={styles.filter_text}>{filter.name}</Text>
                    <Icon name={filter.asc ? 'up' : 'down'} />
                </Pressable>
            })
        }

        <DropDown.CardTypesDropDownPicker onChangeItems={handleCardTypesFilter} />

        <CardDisplay cards={cardsToDisplay} internal={true} marginTop={10} />
    </View>
}