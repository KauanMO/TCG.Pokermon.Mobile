import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
const pokemon = require('pokemon');

const CardTypesDropDownPicker = ({ onChangeItems }: { onChangeItems: (values: string[] | null) => void }) => {
    const styles = StyleSheet.create({
        container: {
            width: 120,
            maxWidth: 120,
            height: 50
        },
        icon: {
            width: 40,
            height: 40
        }
    });

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<ItemType<string>[]>([
        { value: 'BUG', icon: () => <Image source={require('@/assets/icons/cardTypes/bug.png')} style={styles.icon} /> },
        { value: 'DARKNESS', icon: () => <Image source={require('@/assets/icons/cardTypes/dark.png')} style={styles.icon} /> },
        { value: 'DRAGON', icon: () => <Image source={require('@/assets/icons/cardTypes/dragon.png')} style={styles.icon} /> },
        { value: 'LIGHTNING', icon: () => <Image source={require('@/assets/icons/cardTypes/eletric.png')} style={styles.icon} /> },
        { value: 'FAIRY', icon: () => <Image source={require('@/assets/icons/cardTypes/fairy.png')} style={styles.icon} /> },
        { value: 'FIGHNING', icon: () => <Image source={require('@/assets/icons/cardTypes/fighting.png')} style={styles.icon} /> },
        { value: 'FIRE', icon: () => <Image source={require('@/assets/icons/cardTypes/fire.png')} style={styles.icon} /> },
        { value: 'FLYING', icon: () => <Image source={require('@/assets/icons/cardTypes/flying.png')} style={styles.icon} /> },
        { value: 'GHOST', icon: () => <Image source={require('@/assets/icons/cardTypes/ghost.png')} style={styles.icon} /> },
        { value: 'GRASS', icon: () => <Image source={require('@/assets/icons/cardTypes/grass.png')} style={styles.icon} /> },
        { value: 'GROUND', icon: () => <Image source={require('@/assets/icons/cardTypes/ground.png')} style={styles.icon} /> },
        { value: 'ICE', icon: () => <Image source={require('@/assets/icons/cardTypes/ice.png')} style={styles.icon} /> },
        { value: 'NORMAL', icon: () => <Image source={require('@/assets/icons/cardTypes/normal.png')} style={styles.icon} /> },
        { value: 'POISON', icon: () => <Image source={require('@/assets/icons/cardTypes/poison.png')} style={styles.icon} /> },
        { value: 'PSYCHIC', icon: () => <Image source={require('@/assets/icons/cardTypes/psychic.png')} style={styles.icon} /> },
        { value: 'ROCK', icon: () => <Image source={require('@/assets/icons/cardTypes/rock.png')} style={styles.icon} /> },
        { value: 'STEEL', icon: () => <Image source={require('@/assets/icons/cardTypes/steel.png')} style={styles.icon} /> },
        { value: 'WATER', icon: () => <Image source={require('@/assets/icons/cardTypes/water.png')} style={styles.icon} /> }
    ]);

    return <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        searchPlaceholder="Busque pelo nome"
        placeholder="Tipos"
        mode='SIMPLE'
        theme="DARK"
        onChangeValue={(types) => onChangeItems(types)}
        style={styles.container}
        listItemContainerStyle={{
            height: 50,
            maxHeight: 50,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        selectedItemContainerStyle={{
            backgroundColor: '#808080'
        }}
        showTickIcon={false}
    />
}

const FavoritePokemonDropDownPicker = ({ setPokemonCode }: { setPokemonCode: Function }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(null);

    const styles = StyleSheet.create({
        icon: {
            width: 40,
            height: 40
        }
    });

    const [items, setItems] = useState<ItemType<string>[]>(pokemon
        .all()
        .map((p: ItemType<string>) => ({ value: p, label: p, icon: () => <Image style={styles.icon} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemon.getId(p)}.png` }} /> })));

    return <DropDownPicker
        setValue={setValue}
        setOpen={setOpen}
        setItems={setItems}
        open={open}
        items={items}
        multiple={false}
        value={value}
        searchable={true}
        placeholder="Escolha um pokemon"
        searchPlaceholder="Pesquise por seu nome"
        onChangeValue={(e) => setPokemonCode(pokemon.getId(e))}
    />
}

export default {
    CardTypesDropDownPicker,
    FavoritePokemonDropDownPicker
}