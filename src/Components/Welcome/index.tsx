import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Shared/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../helper/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.titleName}>Radium Medical</Text>
      </View>
      <CustomButton onPress={() => navigation.navigate('Login')} text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    alignItems: 'center',
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

export default Welcome;
