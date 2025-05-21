import React, { useEffect, useState } from "react";
import { UserInfo } from "../types/UserType";
import { StyleSheet, Text, View } from "react-native";
import Users from "../api/users";
import StringHelper from "../utils/StringHelper";
import Pokedollar from "../components/Currency/Pokedollar";

export default function HomeScreen() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const requestUserInfo = async () => {
            const response = await Users.getUserInfo();

            setUserInfo(response);
        }

        requestUserInfo()
    }, [])

    const styles = StyleSheet.create({
        hello: {
            fontSize: 24,
            fontWeight: 'bold'
        }
    });

    return <View>
        <Text style={styles.hello}>Ola, {userInfo?.username}!</Text>
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