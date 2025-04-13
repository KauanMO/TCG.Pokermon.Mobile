import { CardSetInfo } from "@/app/types/CardSetType";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TabNavigation } from "@/app";

export default function CardSet({ set }: { set: CardSetInfo }) {
    const navigation = useNavigation<TabNavigation>();

    const openCardSet = () => {
        navigation.navigate('CardSet', { id: set.id });
    }

    return (
        <TouchableOpacity onPress={openCardSet} style={styles.container}>
            <View style={styles.cardWrapper}>
                <Image
                    source={{ uri: set.secondCardImage }}
                    style={[styles.cardImage, styles.cardLeft]}
                />
                <Image
                    source={{ uri: set.thirdCardImage }}
                    style={[styles.cardImage, styles.cardRight]}
                />
                <Image
                    source={{ uri: set.firstCardImage }}
                    style={[styles.cardImage, styles.cardCenter]}
                />
                <Image
                    source={{ uri: set.logo }}
                    style={styles.logo}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardWrapper: {
        width: 220,
        height: 250,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 130,
        height: 180,
        resizeMode: 'contain',
        position: 'absolute',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    cardLeft: {
        transform: [{ rotate: '-15deg' }],
        left: -40,
        zIndex: 0,
    },
    cardRight: {
        transform: [{ rotate: '15deg' }],
        right: -40,
        zIndex: 0,
    },
    cardCenter: {
        zIndex: 1,
    },
    logo: {
        position: 'absolute',
        bottom: 0,
        width: 250,
        height: 60,
        resizeMode: 'contain',
        zIndex: 2,
    },
});