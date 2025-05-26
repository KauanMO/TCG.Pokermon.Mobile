import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Props = {
    page: number,
    totalPage: number,
    setCardsPage: Function
}

export default function PageController(props: Props) {
    const nextPage = () => {
        if (props.page + 1 < props.totalPage) props.setCardsPage(props.page + 1);
    }

    const backPage = () => {
        if (props.page - 1 >= 0) props.setCardsPage(props.page - 1);
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 6,
            fontSize: 24,
            width: '100%',
            justifyContent: 'center',
            marginTop: 20
        },
        pageControllerText: {
            fontSize: 20
        }
    });

    return <View style={styles.container}>
        <TouchableOpacity onPress={() => backPage()}>
            <Text style={styles.pageControllerText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.pageControllerText}>Página {props.page + 1}/{props.totalPage}</Text>
        <TouchableOpacity onPress={() => nextPage()}>
            <Text style={styles.pageControllerText}>{'>'}</Text>
        </TouchableOpacity>
    </View>
}