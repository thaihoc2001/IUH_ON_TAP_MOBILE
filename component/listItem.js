import { React, useState, useContext, createContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContextName } from "./todo";
import { useNavigation } from '@react-navigation/native';

export const ItemContext = createContext();


const Item = ({ item, navigation }) => (
    <ItemContext.Provider value={item}>
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', backgroundColor: 'red', padding: 10, marginBottom: 10 }} onPress={() => { navigation.navigate('test', { item: item }) }}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: item.url }}
                    width={100}
                    height={100}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginStart: 30 }}>
                <Text style={{ fontSize: 30 }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    </ItemContext.Provider>
);
const actionOnRow = (item) => {
    alert(item.nam);
}
export default function ListItem() {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <Item item={item} navigation={navigation} />
    );
    const [text, onChangeText] = useState("");
    const data = useContext(ThemeContextName);
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%', width: '100%' }}>
                <Button title="asdasdasd"></Button>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '50%',
    },
});
