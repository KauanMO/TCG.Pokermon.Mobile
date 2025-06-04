import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

export type Props = {
    image: string,
    width: number,
    onPress?: Function
}

export default function Card(props: Props) {
    const rotateX = useSharedValue(0);
    const rotateY = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            rotateX.value = e.translationY / 10;
            rotateY.value = -e.translationX / 10;
        })
        .onEnd(() => {
            rotateX.value = withSpring(0);
            rotateY.value = withSpring(0);
        });

    const tapGesture = Gesture.Tap()
        .onEnd(() => {
            props.onPress?.()
        })
        .runOnJS(true);

    const gesture = Gesture.Simultaneous(tapGesture, panGesture);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1000 },
            { rotateX: `${rotateX.value}deg` },
            { rotateY: `${rotateY.value}deg` },
        ],
    }));

    const CARD_RATIO: number = 2 / 3;
    const width: number = props.width;
    const height: number = width / CARD_RATIO;

    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.card, animatedStyle, { width, height }]}>
                    <Image source={{ uri: props.image }} style={styles.image} />
                </Animated.View>
            </GestureDetector>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
});