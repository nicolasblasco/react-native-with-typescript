import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <TouchableOpacity
          onPress={onUpdate}
          activeOpacity={0.6}
          style={styles.updateButton}
          testID="update-button">
          <Ionicons name="pencil" size={20} color="#19456B" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDelete}
          activeOpacity={0.4}
          style={styles.deleteButton}
          testID="delete-button">
          <Ionicons name="trash-outline" size={20} color="#DA1212" />
        </TouchableOpacity>
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
  },
  deleteButton: {
    alignItems: 'center',
  },
});

export default ListItem;
