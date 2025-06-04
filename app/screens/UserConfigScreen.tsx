import React, { useEffect, useState } from "react";
import Users from "../api/users";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { UserInfo } from "../types/UserType";
import { TextInput } from "react-native-paper";
import FavoritePokemonIcon from "../components/Icons/FavoritePokemonIcon";
import Constants from "../utils/Constants";
import GoBackIcon from "../components/Icons/GoBackIcon";
import LogOffIcon from "../components/Icons/LogOffIcon";

export default function UserConfigScreen() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>();

    useEffect(() => {
        const requestUserInfo = async (): Promise<void> => {
            const response: UserInfo | null = await Users.getUserInfo();

            setUserInfo(response);
        }

        requestUserInfo();
    }, []);

    const createdDate: Date = new Date(userInfo?.createdDate ?? 0);
    const userInfoOutputs = [
        {
            value: userInfo?.username,
            disabled: true,
            label: 'Nome de usuário'
        },
        {
            value: userInfo?.hashedEmail,
            disabled: true,
            label: 'Email'
        },
        {
            value: createdDate.toLocaleDateString(),
            disabled: true,
            label: 'Conta criada em'
        },
    ];

    return <View style={styles.container}>
        <GoBackIcon />

        <View style={styles.info_logoff_icon_container}>
            <View style={styles.user_info_container}>
                <FavoritePokemonIcon
                    size={140}
                    favoritePokemonCode={userInfo?.favoritePokemonCode ?? 0}
                    editable
                />

                {
                    userInfoOutputs.map(info => {
                        return <TextInput
                            key={info.label}
                            style={styles.user_info_output}
                            value={info.value}
                            disabled={info.disabled}
                            textColor={Constants.colors.textColor}
                            label={<Text style={{ color: 'white' }}>{info.label}</Text>}
                            mode='outlined'
                            outlineStyle={{ borderColor: '#ccc' }}
                        />
                    })
                }
            </View>

            <LogOffIcon />
        </View>

    </View>
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.colors.background,
        width,
        height,
    },
    info_logoff_icon_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '95%'
    },
    user_info_container: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 20,
        width: '100%'
    },
    user_info_output: {
        width: '80%'
    }
});