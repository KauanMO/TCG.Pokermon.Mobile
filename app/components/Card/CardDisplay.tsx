import React from "react";
import { StyleSheet, View } from "react-native";
import { CardInfo } from "@/app/types/CardType";
import Card from "./Card";

type Prop = { cards: CardInfo[] | undefined, internal: boolean, marginTop: number };

export default function CardDisplay({ cards, internal, marginTop }: Prop) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 3,
            marginTop
        }
    });

    return <View style={styles.container}>
        {
            cards?.map(card => {
                return <Card
                    key={internal ? card.id : card.externalCode}
                    card={card}
                    large={false}
                    width={75}
                    height={100}
                    borderRadius={5}
                />
            })
        }
    </View>
}