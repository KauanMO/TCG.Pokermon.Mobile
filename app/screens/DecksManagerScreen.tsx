import React, { useEffect, useState } from "react";
import { DeckExtraInfo } from "../types/DeckType";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Constants from "../utils/Constants";
import GoBackIcon from "../components/Icons/GoBackIcon";
import Decks from "../api/decks";
import Card from "../components/Card/Card";

export default function DecksManagerScreen() {
    const [myDecks, setMyDecks] = useState<DeckExtraInfo[]>();

    useEffect(() => {
        async function getMyDecks() {
            const response: DeckExtraInfo[] = await Decks.getMyDecks();

            response[0].mainTypes[0]

            console.log(`@/assets/icons/cardTypes/${response[0].mainTypes[0].toLowerCase()}.png`);

            setMyDecks(response);
        }

        getMyDecks();
    }, []);

    const cardTypesRequireMap: { [key: string]: any } = {
        bug: require('@/assets/icons/cardTypes/bug.png'),
        darkness: require('@/assets/icons/cardTypes/darkness.png'),
        dragon: require('@/assets/icons/cardTypes/dragon.png'),
        eletric: require('@/assets/icons/cardTypes/eletric.png'),
        fairy: require('@/assets/icons/cardTypes/fairy.png'),
        fighting: require('@/assets/icons/cardTypes/fighting.png'),
        fire: require('@/assets/icons/cardTypes/fire.png'),
        flying: require('@/assets/icons/cardTypes/flying.png'),
        ghost: require('@/assets/icons/cardTypes/ghost.png'),
        grass: require('@/assets/icons/cardTypes/grass.png'),
        ground: require('@/assets/icons/cardTypes/ground.png'),
        ice: require('@/assets/icons/cardTypes/ice.png'),
        normal: require('@/assets/icons/cardTypes/normal.png'),
        poison: require('@/assets/icons/cardTypes/poison.png'),
        psychic: require('@/assets/icons/cardTypes/psychic.png'),
        rock: require('@/assets/icons/cardTypes/rock.png'),
        steel: require('@/assets/icons/cardTypes/steel.png'),
        water: require('@/assets/icons/cardTypes/water.png'),
    }

    return <View style={styles.container}>
        <GoBackIcon />

        <View style={styles.decks_display}>
            {
                myDecks && myDecks[0] && myDecks.map(deck => {
                    return <View style={styles.deck_display} key={deck.deck.id}>
                        <Text style={styles.deck_name}>{deck.deck.name}</Text>

                        <View style={styles.deck_highlights}>
                            <Card image={deck.mainCard.images.small} width={50} />
                            {
                                deck.mainTypes[0] && deck.mainTypes.map(mainType => {
                                    return <Image style={styles.main_type_icon} key={mainType} source={cardTypesRequireMap[mainType.toLowerCase()]} />
                                })
                            }
                        </View>

                    </View>
                })
            }
        </View>

    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height,
        display: 'flex',
        justifyContent: 'center'
    },
    decks_display: {
        height: height * 0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deck_display: {
        width: width * 0.9,
        backgroundColor: 'gray',
        borderRadius: width * 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    deck_name: {
        marginLeft: 16,
        color: 'white'
    },
    main_type_icon: {
        width: 80,
        height: 80,
    },
    deck_highlights: {
        display: 'flex',
        flexDirection: 'row',
    }
});