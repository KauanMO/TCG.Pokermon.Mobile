import { CardInfo } from "@/app/types/CardType";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
    card: CardInfo,
    large: boolean,
    width: number,
    height: number,
    borderRadius: number
}

export default function Card({ card, large, width, height, borderRadius }: Props) {
    const styles = StyleSheet.create({
        container: {
            width,
            height,
        },
        card: {
            borderRadius,
            height: '100%',
            width: '100%',
        }
    });

    return <View style={styles.container}>
        <Image
            style={styles.card}
            src={
                large
                    ? card.images.large
                    : card.images.small
            }
        />
    </View>
}
