import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.Card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,

    borderRadius: 16,
    backgroundColor: 'white'
  }
});
