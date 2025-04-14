import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { CardInfo } from "@/app/types/CardType";
import Card from "./Card";

type Prop = { cards: CardInfo[] | undefined, internal: boolean, marginTop: number };

export default function CardDisplay({ cards, internal, marginTop }: Prop) {
    const [expandedCard, setExpandedCard] = useState<CardInfo | null>(null);
    const { width, height } = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 3,
            marginTop
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
                {cards?.map(card => (
                    <Card
                        key={internal ? card.id : card.externalCode}
                        card={card}
                        large={true}
                        width={75}
                        height={100}
                        borderRadius={5}
                        holo={card.rarity.includes('Holo')}
                        onExpand={() => setExpandedCard(card)}
                        info={false}
                    />
                ))}
            </View>
            {
                expandedCard && (
                    <View style={styles.overlay}>
                        <Card
                            card={expandedCard}
                            large={true}
                            width={400}
                            height={600}
                            borderRadius={10}
                            holo={expandedCard.rarity.includes('Holo')}
                            onExpand={() => setExpandedCard(null)}
                            info={true}
                        />
                    </View>
                )
            }
        </>
    );
}