import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface Props {
  onPress: any;
  text: string;
}

const CustomButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <>
      <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#19456B',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CustomButton;
