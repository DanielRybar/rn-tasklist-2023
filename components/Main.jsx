import React, { useState } from 'react';
import {List} from "./List"
import Input from './Input';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDataContext } from '../providers/DataProvider';

export const Main = () => {
    const [isAddMode, setIsAddMode] = useState(false);
    const {items, removeAll} = useDataContext();

    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Úkolníček</Text>
        <Button title="Přidat" onPress={() => setIsAddMode(true)} />
        <Button title="Smazat vše" color="red" onPress={e => {
          Alert.alert('Smazat vše', 'Opravdu chcete vymazat všechny položky?', [
            { text: 'Ano', onPress: removeAll, style: 'destructive' },
            { text: 'Zpět', onPress: () => null, style: 'cancel' }
          ]);
          }} 
          disabled={items.length > 0 ? false : true} />
        <Input visible={isAddMode} changeVisible={setIsAddMode} />
        <List />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      padding: 10,
      paddingTop: 50,
      display: "flex",
      flexDirection: "column"
    },
    text: {
      padding: 10,
      textAlign: "center",
      fontSize: 24
    }
});

export default Main;