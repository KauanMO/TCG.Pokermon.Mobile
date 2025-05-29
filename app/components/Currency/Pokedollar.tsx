import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StringHelper from "@/app/utils/StringHelper";
import Constants from "@/app/utils/Constants";

export type Props = {
    value: number,
    coinSize: number,
    textColor?: string,
    textSize?: number,
    top?: number | null,
    right?: number | null,
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | undefined,
}

export default function Pokedollar(props: Props) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
            position: props.position ?? "relative",
            top: props.top ?? null,
            right: props.right ?? null
        },
        value_text: {
            color: props.textColor ?? Constants.colors.textColor,
            fontSize: props.textSize ?? 16
        },
        coin: {
            width: props.coinSize,
            height: props.coinSize,
        }
    })

    return <View style={styles.container}>
        <Image style={styles.coin} source={require('@/assets/icons/coin.png')} />
        <Text style={styles.value_text}>{StringHelper.getFormattedCurrency(props.value)}</Text>
    </View>
}