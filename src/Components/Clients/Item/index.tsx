import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface Props {
  id: number;
  name: string;
  email: string;
  onDelete: () => void;
  onUpdate: () => void;
}

const ListItem: React.FC<Props> = ({id, name, email, onDelete, onUpdate}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.data}>ID: {id}</Text>
        <Text style={styles.data}>Name: {name}</Text>
        <Text style={styles.data}>Email: {email}</Text>
      </View>
      <View style={styles.buttonColumn}>
        <Pressable onPress={onUpdate} style={styles.updateButton}>
          <Text style={styles.update}>Update</Text>
        </Pressable>
        <Pressable onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.delete}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderLeftColor: '#19456B',
    borderLeftWidth: 5,
    backgroundColor: '#F8F1F1',
  },
  data: {
    fontSize: 15,
    color: '#19456B',
  },
  buttonColumn: {
    justifyContent: 'space-between',
  },
  updateButton: {
    alignItems: 'center',
    padding: 3,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#11698E',
    backgroundColor: '#FFFFFF',
  },
  update: {
    color: '#11698E',
  },
  deleteButton: {
    alignItems: 'center',
    padding: 3,
    borderRadius: 3,
    backgroundColor: '#DA1212',
  },
  delete: {
    color: '#FFFFFF',
  },
});

export default ListItem;
