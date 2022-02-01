import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Home = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.titleName}>Radium Medical</Text>
      <TouchableHighlight
        onPress={() => console.log('logout')}
        underlayColor="#16C79A"
        style={styles.button}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    color: '#16C79A',
    fontWeight: '500',
  },
  titleName: {
    fontSize: 30,
    color: '#19456B',
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#19456B',
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Home;
