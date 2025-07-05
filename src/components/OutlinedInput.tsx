import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

import React from 'react';

type OutlinedInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & Partial<TextInputProps>;

const OutlinedInput: React.FC<OutlinedInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  right,
  style,
  ...rest
}) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      right={right}
      style={[styles.input, style]}
      {...rest}
    />
  );
};

export default OutlinedInput;

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
    height:44,
    width:'100%'
  },
});
