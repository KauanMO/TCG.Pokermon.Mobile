import React, { useEffect, useState } from "react";
import { UserInfo } from "../types/user";
import { StyleSheet, Text, View } from "react-native";
import { getUserInfo } from "../api/users";

export default function HomeScreen() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const requestUserInfo = async () => {
            const response = await getUserInfo();

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
    </View>
}