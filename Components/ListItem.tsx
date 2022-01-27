import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
  id: number;
  name: string;
  email: string;
}

const ListItem: React.FC<Props> = ({id, name, email}) => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.data}>ID: {id}</Text>
          <Text style={styles.data}>Name: {name}</Text>
          <Text style={styles.data}>Email: {email}</Text>
        </View>
        <View style={styles.buttonColumn}>
          <Pressable style={styles.updateButton}>
            <Text>Update</Text>
          </Pressable>
          <Pressable style={styles.deleteButton}>
            <Text style={styles.delete}>Delete</Text>
          </Pressable>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    backgroundColor: '#11698E'
  },
  data: {
    fontSize: 15,
    color: '#FFF'
  },
  buttonColumn: {
    justifyContent:'space-between'
  },
  updateButton :{
    padding: 3,
    borderRadius: 3,
    backgroundColor: '#FFFFFF'
  },
  deleteButton: {
    padding: 3,
    borderRadius: 3,
    backgroundColor: '#DA1212'
  },
  delete: {
    color: '#FFFFFF'
  }
});

export default ListItem;