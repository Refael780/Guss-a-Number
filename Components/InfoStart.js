import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import color from '../constants/color';
import CustomButton from '../Components/Utils/CustomButton';
const InfoStart = props => {
  return (
    <View style={{ ...props.style }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
        You Selected The Number:
      </Text>
      <Text style={styles.txt}>{props.number}</Text>
      <CustomButton>START GAME</CustomButton>
    </View>
  );
};

export default InfoStart;

const styles = StyleSheet.create({
  txt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: color.txtColor,
    fontWeight: 'bold',
    fontSize: 110
  }
});
