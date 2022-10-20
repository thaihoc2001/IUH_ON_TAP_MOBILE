import { React, useState, useEffect, createContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormCreateTask from './component/formCreateTask';
import ListItem from './component/listItem';
import { ThemeContext } from "@react-native-material/core";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Todo from "./component/todo";
import Test from "./component/test";


export const ThemeContextName = createContext();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="todo" component={Todo} />
      <Stack.Screen name="test" component={Test} />
    </Stack.Navigator>
  );
}

export default function App() {
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
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
