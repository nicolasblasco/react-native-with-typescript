import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Radium Medical</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#16C79A',
  },
  title: {
    fontSize: 20,
    color: '#19456B',
    fontWeight: '700',
  },
});

export default Header;
