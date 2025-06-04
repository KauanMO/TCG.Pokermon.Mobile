import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

export default function HoloEffect({ width, height }: { width: number | string, height: number | string }) {
    const translateX = useRef(new Animated.Value(-width)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width as number,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    return (
        <Animated.View
            pointerEvents="none"
            style={{
                position: 'absolute',
                width: width as number,
                height: height as number,
                transform: [{ translateX }],
                opacity: 0.1,
            }}
        >
            <LinearGradient
                colors={['transparent', '#00f0ff', '#ff00ff', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ width: '100%', height: '100%' }}
            />
        </Animated.View>
    );
}