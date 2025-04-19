import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Users from '../api/users';
import { LoginRequest, LoginResponse } from "../types/UserType";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Storage from "@/services/storage";
import Auth from "../api/auth";

export default function LoginScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkUser = async () => {
            const token = await Storage.getToken();

            if (token != null) {
                try {
                    await Auth.checkToken();
                    navigation.navigate('Main' as never);
                } catch (e) {
                    const userCredentials = await Storage.getCredentials();

                    if (userCredentials?.email && userCredentials.password) {
                        setFormData(userCredentials as LoginRequest);

                        sendLogin();
                    }
                }
            }
        };

        // checkUser();
    }, [])


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
            navigation.navigate('Main' as never);
        } else {
            console.error('Error at user login');
        }

        setLoading(false);
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20
        },
        form_input: {
            width: '100%',
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 10
        },
        form_buttons_container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 16
        }
    })

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