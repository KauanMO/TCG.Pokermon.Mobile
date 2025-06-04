import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "expo-router";
import { StyleSheet } from "react-native";
import Constants from "@/app/utils/Constants";

export default function GoBackIcon() {
    const navigate = useNavigation();

    return <Icon style={styles.goBackIcon} color={Constants.colors.textColor} name={'arrow-left'} size={32} onPress={() => navigate.goBack()} />
}

const styles = StyleSheet.create({
    goBackIcon: {
        position: 'absolute',
        top: 6,
        left: 6
    }
});