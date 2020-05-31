import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../../constants/color';
const ShowGuss = props => {
  return (
    <View style={{ ...styles.border, ...props.style }}>
      <Text style={styles.number}>{props.gussinNumber}</Text>
    </View>
  );
};

export default ShowGuss;

const styles = StyleSheet.create({
  border: {
    padding: 25,
    borderColor: color.borderColor,
    borderWidth: 3,
    borderRadius: 15
  },
  number: {
    alignItems: 'center',
    justifyContent: 'center',
    color: color.txtColor,
    fontSize: 44
  }
});
