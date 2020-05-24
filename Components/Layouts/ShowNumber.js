import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../../constants/color';

const ShowNumber = props => {
  return (
    <View style={{ ...styles.border, ...props.style }}>{props.children}</View>
  );
};

export default ShowNumber;

const styles = StyleSheet.create({
  border: {
    borderWidth: 4,
    borderRadius: 16,
    borderColor: color.borderColor
  }
});
