import Users from "@/app/api/users";
import Constants from "@/app/utils/Constants";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import Modal from 'react-native-modal';
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

export type Props = {
    containerStyle?: ViewStyle
}

export default function LogOffIcon(props: Props) {
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const navigation = useNavigation();

    async function logOff() {
        await Users.logOff();

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            })
        );
    }

    return <View>
        <Modal isVisible={confirmModalOpen}>
            <View style={styles.confirm_modal_container}>
                <Text style={styles.confirm_modal_text}>
                    Tem certeza?
                </Text>
                <Button buttonColor="blue" onPress={() => logOff()}><Text>Confirmar</Text></Button>
                <Button buttonColor="red" onPress={() => setConfirmModalOpen(false)}><Text>Cancelar</Text></Button>
            </View>
        </Modal>

        <Pressable onPress={() => setConfirmModalOpen(true)} style={[styles.container, props.containerStyle]}>
            <Text style={styles.icon_text}>Sair</Text>

            <Icon name={'exit-outline'} size={20} color={Constants.colors.red} />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    icon_text: {
        color: Constants.colors.red,
        fontSize: 20
    },
    confirm_modal_container: {
        flex: 1,
        backgroundColor: Constants.colors.background,
        maxHeight: '20%',
        width: '50%',
        borderRadius: '10%',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    confirm_modal_text: {
        color: Constants.colors.textColor,
        fontSize: 16
    }
});