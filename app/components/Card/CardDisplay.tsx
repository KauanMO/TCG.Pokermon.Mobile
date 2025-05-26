import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { CardInfo } from "@/app/types/CardType";
import Card from "./Card";

type Prop = {
    cards: CardInfo[] | undefined,
    internal: boolean,
    marginTop: number,
    cardWidth?: number,
    cardHeight?: number,
    rowCount?: number
};

export default function CardDisplay(props: Prop) {
    const [expandedCard, setExpandedCard] = useState<CardInfo | null>(null);
    const { width, height } = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 3,
            marginTop: props.marginTop,
            maxHeight: props.rowCount && props.cardHeight
                ? props.cardHeight * props.rowCount
                : null
        },
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
        expanded_card_info: {
            backgroundColor: 'white',
            width: 300
        }
    });

    return (
        <>
            <View style={styles.container}>
                {
                    props.cards?.map(card => (
                        <Card
                            key={props.internal ? card.id : card.externalCode}
                            card={card}
                            width={props.cardWidth ?? 75}
                            height={props.cardHeight ?? 100}
                            borderRadius={5}
                            holo={card.rarity.includes('Holo')}
                            onExpand={() => setExpandedCard(card)}
                            info={false}
                        />
                    ))
                }
            </View>
            {
                expandedCard && (
                    <View style={styles.overlay}>
                        <Card
                            card={expandedCard}
                            width={300}
                            height={500}
                            borderRadius={10}
                            holo={expandedCard.rarity.includes('Holo')}
                            onExpand={() => setExpandedCard(null)}
                            info={true}
                            internal
                        />
                    </View>
                )
            }
        </>
    );
}