import React, { useEffect, useState } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import Users from '../api/users';
import { LoginRequest } from "../types/UserType";
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import Storage from "@/services/storage";
import Auth from "../api/auth";
import Constants from "../utils/Constants";

export default function LoginScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkUser = async () => {
            const token = await Storage.getToken();

            if (token != null) {
                try {
                    await Auth.checkToken();

                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Main' }]
                        })
                    );
                } catch (e) {
                    const userCredentials = await Storage.getCredentials();

                    if (userCredentials?.email && userCredentials.password) {
                        setFormData(userCredentials as LoginRequest);

                        sendLogin();
                    }
                }
            }
        };

        checkUser();
    }, []);

    const [formData, setFormData] = useState({
        email: 'kauaanmatheus@gmail.com',
        password: "Kauan123@"
    });

    const [loading, setLoading] = useState(false);

    const setState = (key: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [key]: value });
    }

    const sendLogin = async () => {
        setLoading(true);

        if (await Users.login(formData)) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Main' }]
                })
            );
        } else {
            console.error('Error at user login');
        }

        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.form_input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => setState("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.form_input}
                placeholder='********'
                value={formData.password}
                onChangeText={(text) => setState("password", text)}
                secureTextEntry
            />

            <View style={styles.form_buttons_container}>
                <Button title={'Cadastrar'} onPress={() => navigation.navigate('Register' as never)} />
                <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={sendLogin} disabled={loading} />
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Constants.colors.background,
        width,
        height
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Constants.colors.textColor
    },
    form_input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: Constants.colors.textColor
    },
    form_buttons_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16
    }
});