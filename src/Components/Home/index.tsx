import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.titleName}>Radium Medical</Text>
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
});

export default Home;
