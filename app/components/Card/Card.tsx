import { CardInfo } from "@/app/types/CardType";
import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { Animated, Image, PanResponder, Pressable, Text, View } from "react-native";
import StringHelper from "@/app/utils/StringHelper";
import HoloEffect from "./HoloEffect";
import Pokedollar from "../Currency/Pokedollar";

type Props = {
    card: CardInfo;
    width: number | null;
    height: number | null;
    borderRadius: number;
    holo: boolean;
    onExpand?: () => void;
    info: boolean;
    internal?: boolean
};

export default function Card({
    card,
    width,
    height,
    borderRadius,
    holo,
    onExpand,
    info,
    internal
}: Props) {
    const rotateX = useRef(new Animated.Value(0)).current;
    const rotateY = useRef(new Animated.Value(0)).current;
    const [isMove, setIsMove] = useState(false);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            const dx = gesture.dx;
            const dy = gesture.dy;

            rotateY.setValue(dx * .9);
            rotateX.setValue(-dy * .9);

            if (Math.abs(dx) > 10 || Math.abs(dy) > 10)
                setIsMove(true);
        },
        onPanResponderRelease: () => {
            if (!isMove && onExpand) onExpand();

            Animated.spring(rotateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
            Animated.spring(rotateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();

            setIsMove(false);

        }
    });

    const animatedStyle = {
        transform: [
            {
                rotateY: rotateY.interpolate({
                    inputRange: [-45, 0, 45],
                    outputRange: ["-15deg", "0deg", "15deg"],
                    extrapolate: "clamp",
                }),
            },
            {
                rotateX: rotateX.interpolate({
                    inputRange: [-45, 0, 45],
                    outputRange: ["15deg", "0deg", "-15deg"],
                    extrapolate: "clamp",
                }),
            },
        ],
    };

    const styles = StyleSheet.create({
        container: {
            width,
            height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        card_info_name: {
            fontSize: 24,
            color: 'white',
            fontWeight: 500
        },
        card_info_text_container: {
            display: 'flex',
            alignItems: 'center'
        },
        card_info_text: {
            fontSize: 20,
            color: 'white'
        },
    });

    return (
        <Pressable onPress={onExpand} style={styles.container}>
            {
                info && (
                    <View>
                        <Text style={styles.card_info_name}>{card.name}</Text>
                    </View>
                )
            }
            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    {
                        width,
                        height,
                        borderRadius,
                        backgroundColor: "transparent",
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    animatedStyle,
                ]}
            >
                <Image
                    src={info ? card.images.large : card.images.small}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius,
                    }}
                    resizeMode="contain"
                />
                {
                    holo && !info && (
                        <HoloEffect
                            width='100%'
                            height='100%'
                        />
                    )
                }
            </Animated.View>
            {
                info && (
                    <View style={styles.card_info_text_container}>
                        {
                            internal
                                ? <Pokedollar value={card.price} coinSize={24} textColor="white" textSize={24} />
                                : <Text style={styles.card_info_text}>Preço base: {StringHelper.getFormattedCurrency(card.price)}</Text>
                        }

                        <Text style={styles.card_info_text}>Raridade: {card.rarity}</Text>
                    </View>
                )
            }
        </Pressable>
    );
}