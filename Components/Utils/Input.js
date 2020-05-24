import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
    ></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 30,
    textAlign: 'center'
  }
});
