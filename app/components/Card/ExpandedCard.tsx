import { CardInfo } from "@/app/types/CardType";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import Pokedollar from "../Currency/Pokedollar";

const { width, height } = Dimensions.get('window');

export type Props = {
    card: CardInfo,
    setExpanded: Function,
    internal?: boolean,
    cardsObtainedCount?: number
}

export default function ExpandedCard(props: Props) {
    return <Pressable onPress={() => props.setExpanded()} style={styles.overlay}>
        <Text style={[styles.card_name, styles.card_text]}>{props.card.name}</Text>
        <Card
            image={props.card.images.large}
            width={width * 0.65}
            onPress={() => props.setExpanded()}
        />
        <View style={styles.card_info_container}>
            <View style={styles.card_price}>
                <Pokedollar textColor="white" value={props.card.price} textSize={20} coinSize={20} />
            </View>
            <View>
                <Text style={[styles.card_info_text, styles.card_text]}>{props.card.rarity}</Text>
            </View>
            {
                props.cardsObtainedCount && <View>
                    <Text style={[styles.card_info_text, styles.card_text]}>({props.cardsObtainedCount})</Text>
                </View>
            }
            {
                props.internal && <View>
                    <Text style={[styles.card_info_text, styles.card_text]}>Qualidade: {props.card.quality}</Text>
                    {
                        props.card.evolvesFrom &&
                        <Text style={[styles.card_info_text, styles.card_text]}>Evolui de: {props.card.evolvesFrom}</Text>
                    }
                    {
                        props.card.description &&
                        <Text style={[styles.card_info_text, styles.card_text]}>{props.card.description}</Text>
                    }
                    <Text style={[styles.card_info_text, styles.card_text]}>Tipos: {props.card.types}</Text>
                    <Text style={[styles.card_info_text, styles.card_text]}>Subtipos: {props.card.subTypes}</Text>
                </View>
            }
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    card_name: {
        fontSize: 24,
        marginBottom: 16
    },
    card_info_container: {
        display: 'flex',
        alignItems: 'center'
    },
    card_text: {
        color: 'white',
    },
    card_info_text: {
        fontSize: 16,
    },
    card_price: {
        marginTop: 16
    }
})