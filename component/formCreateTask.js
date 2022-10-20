import { React, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FormCreateTask() {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.container}>
            <View style={{width: '80%',display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', height: 40, width: '90%' }}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View style={{width: '20%', display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    variant="contained"
                    leading={props => <Icon name="plus-circle" size={30} color="#000" style={{marginStart: 10, marginTop: 5}}/>}
                    style={{ width: '100%', height: 40, width: 'auto', margin: 'auto', textAlign: 'center'}}
                />
            </View>
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
    },
});
