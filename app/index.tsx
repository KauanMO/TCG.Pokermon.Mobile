import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, RootTabParamList } from "./types/ParamList";
import { NavigationProp } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardsScreen from "./screens/CardsScreen";
import CardSetScreen from "./screens/CardSetScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();
export type TabNavigation = NavigationProp<RootTabParamList>;
export type StackNavigation = NavigationProp<RootStackParamList>;

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                var iconName: string;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline'
                } else if (route.name === 'Shop') {
                    iconName = focused
                        ? 'shopping'
                        : 'shopping-outline'
                } else if (route.name === 'Cards') {
                    iconName = focused
                        ? 'cards'
                        : 'cards-outline'
                } else {
                    iconName = focused
                        ? 'list'
                        : 'list-outline'
                }

                return <Icon name={iconName} color={color} size={size} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        })}>
            <Tab.Screen name="Cards" component={CardsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="CardSet" component={CardSetScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}