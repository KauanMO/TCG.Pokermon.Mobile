import React, { useEffect, useState } from "react";
import { UserInfo } from "../types/UserType";
import { Dimensions, View } from "react-native";
import Users from "../api/users";
import Pokedollar from "../components/Currency/Pokedollar";
import FavoritePokemonIcon from "../components/Icons/FavoritePokemonIcon";
import { useNavigation } from "expo-router";
import { StyleSheet } from "react-native";
import Constants from "../utils/Constants";

export default function HomeScreen() {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const requestUserInfo = async () => {
            const response = await Users.getUserInfo();

            setUserInfo(response);
        }

        requestUserInfo()
    }, [])

    return <View style={styles.container}>
        <FavoritePokemonIcon
            favoritePokemonCode={userInfo?.favoritePokemonCode ?? 0}
            position="absolute"
            top={6}
            left={16}
            onPress={() => navigation.navigate('UserConfig' as never)}
        />

        {
            userInfo?.balance != undefined &&
            <Pokedollar
                position={"absolute"}
                value={userInfo.balance}
                coinSize={30}
                top={10}
                right={10}
            />
        }
    </View>
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height
    }
});