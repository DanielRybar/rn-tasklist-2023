import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import {useDataContext} from "../providers/DataProvider"
import {Item} from "./Item"

export const List = () => {
    const {items, removeItem, removeAll} = useDataContext();
    return (
        <>
        <Button title="Smazat vše" color="red" onPress={removeAll} disabled={items.length > 0 ? false : true} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={items}
                renderItem={data => (<Item id={data.item.id} value={data.item.value} deleteAction={e => removeItem(data.item.id)} />)}
            />
        </>
    );
}

export default List;