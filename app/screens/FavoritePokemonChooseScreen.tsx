import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DropDown from "../components/DropDown";
import Users from "../api/users";
import { useNavigation } from "expo-router";

export default function FavoritePokemonChooseScreen() {
    const navigation = useNavigation();

    const [pokemonCode, setPokemonCode] = useState<number>(0);

    const sendUpdateFavoritePokemonCode = async () => {
        Users.updateFavoritePokemonCode(pokemonCode);

        navigation.navigate('Main' as never);
    }

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flex: 1,
            gap: 16
        },
        favorite_pokemon_ask: {
            fontSize: 24
        },
        explanation: {
            fontSize: 16
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        },
        dropdown_picker_container: {
            width: '80%'
        }
    });

    return <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.favorite_pokemon_ask}>Qual seu pokemon favorito?</Text>
            <Text style={styles.explanation}>Esse será a sua foto de perfil</Text>
        </View>

        <View style={styles.dropdown_picker_container}>
            <DropDown.FavoritePokemonDropDownPicker setPokemonCode={setPokemonCode} />
        </View>

        <Button title='Escolhi' onPress={() => sendUpdateFavoritePokemonCode()} />
    </View>
}