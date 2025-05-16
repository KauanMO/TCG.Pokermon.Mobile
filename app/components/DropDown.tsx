import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';

const CardTypesDropDownPicker = ({ onChangeItems }: { onChangeItems: (values: string[] | null) => void }) => {
    const styles = StyleSheet.create({
        icon: {
            width: 40,
            height: 40
        }
    });

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<ItemType<string>[]>([
        { label: 'Inseto', value: 'BUG', icon: () => <Image source={require('@/assets/icons/cardTypes/bug.png')} style={styles.icon} /> },
        { label: 'Sombrio', value: 'DARKNESS', icon: () => <Image source={require('@/assets/icons/cardTypes/dark.png')} style={styles.icon} /> },
        { label: 'Dragão', value: 'DRAGON', icon: () => <Image source={require('@/assets/icons/cardTypes/dragon.png')} style={styles.icon} /> },
        { label: 'Elétrico', value: 'LIGHTNING', icon: () => <Image source={require('@/assets/icons/cardTypes/eletric.png')} style={styles.icon} /> },
        { label: 'Fada', value: 'FAIRY', icon: () => <Image source={require('@/assets/icons/cardTypes/fairy.png')} style={styles.icon} /> },
        { label: 'Lutador', value: 'FIGHNING', icon: () => <Image source={require('@/assets/icons/cardTypes/fighting.png')} style={styles.icon} /> },
        { label: 'Fogo', value: 'FIRE', icon: () => <Image source={require('@/assets/icons/cardTypes/fire.png')} style={styles.icon} /> },
        { label: 'Voador', value: 'FLYING', icon: () => <Image source={require('@/assets/icons/cardTypes/flying.png')} style={styles.icon} /> },
        { label: 'Fantasma', value: 'GHOST', icon: () => <Image source={require('@/assets/icons/cardTypes/ghost.png')} style={styles.icon} /> },
        { label: 'Planta', value: 'GRASS', icon: () => <Image source={require('@/assets/icons/cardTypes/grass.png')} style={styles.icon} /> },
        { label: 'Terrestre', value: 'GROUND', icon: () => <Image source={require('@/assets/icons/cardTypes/ground.png')} style={styles.icon} /> },
        { label: 'Gelo', value: 'ICE', icon: () => <Image source={require('@/assets/icons/cardTypes/ice.png')} style={styles.icon} /> },
        { label: 'Normal', value: 'NORMAL', icon: () => <Image source={require('@/assets/icons/cardTypes/normal.png')} style={styles.icon} /> },
        { label: 'Venenoso', value: 'POISON', icon: () => <Image source={require('@/assets/icons/cardTypes/poison.png')} style={styles.icon} /> },
        { label: 'Psíquico', value: 'PSYCHIC', icon: () => <Image source={require('@/assets/icons/cardTypes/psychic.png')} style={styles.icon} /> },
        { label: 'Pedra', value: 'ROCK', icon: () => <Image source={require('@/assets/icons/cardTypes/rock.png')} style={styles.icon} /> },
        { label: 'Aço', value: 'STEEL', icon: () => <Image source={require('@/assets/icons/cardTypes/steel.png')} style={styles.icon} /> },
        { label: 'Água', value: 'WATER', icon: () => <Image source={require('@/assets/icons/cardTypes/water.png')} style={styles.icon} /> }
    ]);

    return <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        searchable={true}
        searchPlaceholder="Busque pelo nome"
        placeholder="Tipos"
        mode='BADGE'
        theme="DARK"
        onChangeValue={(types) => onChangeItems(types)}
    />
}

export default {
    CardTypesDropDownPicker
}