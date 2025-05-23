import React from "react";
import { Image, StyleSheet, View } from "react-native";

export type Props = {
    favoritePokemonCode: number,
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | undefined,
    top?: number,
    right?: number,
    left?: number,
    bottom?: number,
}

export default function FavoritePokemonIcon(props: Props) {
    const styles = StyleSheet.create({
        container: {
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#ccc',
            position: props.position ?? 'relative',
            top: props.top ?? null,
            right: props.right ?? null,
            left: props.left ?? null,
            bottom: props.bottom ?? null,
        },
        image: {
            width: '100%',
            height: '100%',
            flex: 1
        }
    });

    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${props.favoritePokemonCode}.png` }} />
    </View>
}