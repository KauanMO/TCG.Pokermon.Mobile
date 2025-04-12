import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login } from '../api/users';
import { saveUserId } from "@/services/storage";
import { LoginResponse } from "../types/user";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getUserId } from "@/services/storage";

export default function LoginScreen() {
    const navigation = useNavigation();

    if (getUserId() != null) {
        navigation.navigate('Main' as never);
    }

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

        const response: LoginResponse | null = await login(formData);

        await saveUserId(response ? response.id : 1);

        navigation.navigate('Main' as never);

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
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.form_input}
                placeholder='Digite seu email'
                value={formData.email}
                onChangeText={(text) => setState("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.form_input}
                placeholder='Digite sua senha'
                value={formData.password}
                onChangeText={(text) => setState("password", text)}
                secureTextEntry
            />

            <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={sendLogin} disabled={loading} />
        </View>
    )
}