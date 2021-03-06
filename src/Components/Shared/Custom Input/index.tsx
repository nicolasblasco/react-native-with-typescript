import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {Controller} from 'react-hook-form';

interface Props {
  control: any;
  name: string;
  rules: object;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<Props> = ({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={styles.container}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.input, {borderColor: error ? 'red' : '#e8e8e8'}]}
          />
          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  error: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    color: '#DA1212',
  },
});

export default CustomInput;
