import React, { useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootStackParamList, RootTabParamList } from "./types/ParamList";
import { NavigationProp } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import CardsScreen from "./screens/CardsScreen";
import CardSetScreen from "./screens/CardSetScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FavoritePokemonChooseScreen from "./screens/FavoritePokemonChooseScreen";
import PagerView from 'react-native-pager-view';

import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

export type TabNavigation = NavigationProp<RootTabParamList>;
export type StackNavigation = NavigationProp<RootStackParamList>;

function TabNavigator() {
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(1); // página inicial: Home

    const goToPage = (index: number) => {
        pagerRef.current?.setPage(index);
        setPage(index);
    };

    return <View style={{ flex: 1 }}>
        <PagerView
            ref={pagerRef}
            style={{ flex: 1 }}
            initialPage={1}
            onPageSelected={(e) => setPage(e.nativeEvent.position)}
        >
            <View key="0"><CardsScreen /></View>
            <View key="1"><HomeScreen /></View>
            <View key="2"><ShopScreen /></View>
        </PagerView>

        <View style={styles.tabBar}>
            <TouchableOpacity onPress={() => goToPage(0)} style={styles.tab}>
                <Icon
                    name={page === 0 ? 'cards' : 'cards-outline'}
                    color={page === 0 ? 'tomato' : 'grey'}
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToPage(1)} style={styles.tab}>
                <Icon
                    name={page === 1 ? 'home' : 'home-outline'}
                    color={page === 1 ? 'tomato' : 'grey'}
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToPage(2)} style={styles.tab}>
                <Icon
                    name={page === 2 ? 'shopping' : 'shopping-outline'}
                    color={page === 2 ? 'tomato' : 'grey'}
                    size={24}
                />
            </TouchableOpacity>
        </View>
    </View>
}

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{
                animation: 'simple_push'
            }}>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FavoritePokemonChoose" component={FavoritePokemonChooseScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="CardSet" component={CardSetScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            <Toast />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
    },
    tab: {
        padding: 10,
    },
    active: {
        color: "tomato",
        fontWeight: "bold"
    },
    inactive: {
        color: "gray"
    }
});