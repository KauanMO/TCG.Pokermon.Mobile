import React, { useEffect, useState } from "react";
import { UserInfo } from "../types/UserType";
import { StyleSheet, Text, View } from "react-native";
import Users from "../api/users";
import storage from "@/services/storage";
import StringHelper from "../utils/StringHelper";

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
            <Text>{StringHelper.getFormattedCurrency(userInfo.balance)}</Text>
        }
    </View>
}