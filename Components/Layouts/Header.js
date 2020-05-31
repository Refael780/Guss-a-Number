import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={Styles.Header}>
      <Text style={Styles.txtHeader}>Guss a Number</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  Header: {
    width: '100%',
    paddingTop: 36,
    height: 90,
    backgroundColor: '#9B2335',
    alignItems: 'center'
  },
  txtHeader: {
    fontFamily: 'open-sans-bold',

    fontSize: 26,
    color: 'white'
  }
});
export default Header;
