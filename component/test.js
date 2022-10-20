import { React, useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContextName } from "../App";
import { ItemContext } from "./listItem";

export default function Test({navigation, route}) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Text>
                {item.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
    },
});
