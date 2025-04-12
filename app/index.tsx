import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopScreen from "./screens/ShopScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
            <Tab.Screen name="Cards" component={ShopScreen} options={{ headerShown: false }} />
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
        </Stack.Navigator>
    )
}