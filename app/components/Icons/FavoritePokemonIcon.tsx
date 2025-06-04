import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export type Props = {
    favoritePokemonCode: number,
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | undefined,
    top?: number,
    right?: number,
    left?: number,
    bottom?: number,
    onPress?: Function,
    size?: number,
    editable?: boolean
}

export default function FavoritePokemonIcon(props: Props) {
    const styles = StyleSheet.create({
        container: {
            width: props?.size ?? 60,
            height: props?.size ?? 60,
            borderRadius: '50%',
            borderWidth: 5,
            backgroundColor: '#020c0e',
            position: props.position ?? 'relative',
            top: props.top ?? null,
            right: props.right ?? null,
            left: props.left ?? null,
            bottom: props.bottom ?? null,
        },
        image: {
            width: '100%',
            height: '100%',
            flex: 1,
            resizeMode: 'stretch'
        },
        editable_icon: {
            position: 'absolute',
            top: 4,
            right: 4,
            backgroundColor: '#020c0e',
            borderRadius: 50,
            padding: 4
        }
    });

    return <Pressable onPress={() => props.onPress?.() ?? console.warn('No onPress attributed')} style={styles.container}>
        <Image style={styles.image}
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${props.favoritePokemonCode}.png` }} />

        {
            props.editable &&
            <Icon color={'#ccc'} style={styles.editable_icon} size={20} name='edit-2' />
        }
    </Pressable>
}