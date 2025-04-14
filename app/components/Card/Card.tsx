import { CardInfo } from "@/app/types/CardType";
import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { Animated, Image, PanResponder, Pressable, Text, TouchableOpacity, View } from "react-native";
import StringHelper from "@/app/utils/StringHelper";
import HoloEffect from "./HoloEffect";

type Props = {
    card: CardInfo;
    large: boolean;
    width: number;
    height: number;
    borderRadius: number;
    holo: boolean;
    onExpand?: () => void;
    info: boolean;
};

export default function Card({
    card,
    large,
    width,
    height,
    borderRadius,
    holo,
    onExpand,
    info
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
        cardInfoName: {
            fontSize: 24,
            color: 'white',
            fontWeight: 500
        },
        cardInfoText: {
            fontSize: 20,
            color: 'white'
        }
    });

    return (
        <Pressable onPress={onExpand} style={{ width, height }}>
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
                {
                    info && (
                        <View>
                            <Text style={styles.cardInfoName}>{card.name}</Text>
                        </View>
                    )
                }
                <Image
                    src={info ? card.images.large : card.images.small}
                    style={{
                        width: info ? 330 : 400,
                        height: info ? 500 : 100,
                        borderRadius,
                    }}
                    resizeMode="contain"
                />
                {
                    holo && !info && (
                        <HoloEffect
                            width={info ? 330 : 400}
                            height={info ? 500 : 100}
                        />
                    )
                }
                {
                    info && (
                        <View>
                            <Text style={styles.cardInfoText}>Preço base: {StringHelper.getFormattedCurrency(card.price)}</Text>
                            <Text style={styles.cardInfoText}>Raridade: {card.rarity}</Text>
                        </View>
                    )
                }
            </Animated.View>
        </Pressable>
    );
}