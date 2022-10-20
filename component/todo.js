import { Button } from "@react-native-material/core";
import { React, useState, useEffect, createContext } from "react";
import { StyleSheet, View } from 'react-native';
import FormCreateTask from './formCreateTask';
import ListItem from './listItem';


export const ThemeContextName = createContext();

export default function Todo({ navigation: { navigate } }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getTasks = async () => {
        try {
            const response = await fetch('https://6348d5d70b382d796c781eef.mockapi.io/api/books');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getTasks();
    }, []);
    return (
        <ThemeContextName.Provider value={data}>
            <View style={styles.container}>
                <FormCreateTask></FormCreateTask>
                <ListItem navigate={navigate}></ListItem>
            </View>
        </ThemeContextName.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
