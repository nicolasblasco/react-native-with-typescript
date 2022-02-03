import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});

export default User;
