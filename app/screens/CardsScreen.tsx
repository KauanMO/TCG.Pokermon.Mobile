import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
        filters_container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            margin: 8,
            alignContent: 'center',
            justifyContent: 'center'
        },
        filter_container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            fontSize: 16,
            alignContent: 'center',
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

    return <View>
        <View style={styles.filters_container}>
            {
                filters.map((filter, index) => {
                    return <Pressable style={styles.filter_container} key={filter.name} onPress={() => handleFilterClick(index)}>
                        <Text style={styles.filter_text}>{filter.name}</Text>
                        <Icon color={'#bfc7d5'} size={16} name={filter.asc ? 'up' : 'down'} />
                    </Pressable>
                })
            }

            <View>
                <DropDown.CardTypesDropDownPicker onChangeItems={handleCardTypesFilter} />
            </View>
        </View>

        <CardDisplay cards={cardsToDisplay} internal={true} marginTop={10} />
    </View>
}