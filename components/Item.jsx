import { useState } from "react";
import { styles as modalStyle } from "./Input"
import { StyleSheet, View, Text, TouchableOpacity, Modal, Button, TextInput, Image } from 'react-native'
import { useDataContext } from "../providers/DataProvider"

export const Item = ({ id, value, deleteAction }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(value);

  const {editItem} = useDataContext();

  return (
    <>
      <TouchableOpacity onPress={() => { setEditMode(true); }} >
        <View style={styles.item}>
          <Text>{value}</Text>
          <TouchableOpacity onPress={deleteAction}>
            <Image source={require('../assets/trash.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Modal visible={editMode} animationType="slide" style={modalStyle.window} onRequestClose={e => setEditMode(false)}>
        <View style={modalStyle.inputContainer}>
          <TextInput
            style={modalStyle.input}
            onChangeText={(text) => { setEditedItem(text) }}
            value={editedItem}
          />
          <View style={modalStyle.buttonContainer}>
            <View style={modalStyle.button}>
              <Button title="Zrušit" color="red" onPress={() => { setEditMode(false); setEditedItem(value) }} />
            </View>
            <View style={modalStyle.button}>
              <Button title="Upravit" onPress={e => { editItem(id, editedItem); setEditMode(false); }} 
              disabled={editedItem.length === 0 || editedItem === value ? true : false} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderColor: '#bbb',
    borderWidth: 1,
    color: "#bbb",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
    backgroundColor: "crimson"
  }
});

export default Item;