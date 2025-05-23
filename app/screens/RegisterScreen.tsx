import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { RegisterRequest } from "../types/UserType";
import Users from "../api/users";

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        },
        title: {
            fontSize: 24
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
        buttons_container: {
            flexDirection: 'row',
            gap: 16
        }
    });

    const [formData, setFormData] = useState<RegisterRequest>({
        username: 'melissa',
        email: 'melissa@gmail.com',
        password: 'Melissa123@'
    });

    const setState = (key: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    const sendRegister = async (): Promise<void> => {
        setLoading(true);

        if (await Users.register(formData)) {
            navigation.navigate('FavoritePokemonChoose' as never);
        }

        setLoading(false);
    }

    return <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
            onChangeText={text => setState('username', text)}
            value={formData?.username}
            style={styles.form_input}
            placeholder="Nome de usuário" />
        <TextInput
            onChangeText={text => setState('email', text)}
            value={formData?.email}
            style={styles.form_input}
            placeholder="Email" />
        <TextInput
            onChangeText={text => setState('password', text)}
            value={formData?.password}
            style={styles.form_input}
            placeholder="Senha"
            secureTextEntry />

        <View style={styles.buttons_container}>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <Button title={loading ? 'Cadastrando...' : 'Cadastrar'} onPress={sendRegister} disabled={loading} />
        </View>
    </View>
}