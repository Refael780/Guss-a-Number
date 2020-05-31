import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import globalStyles from '../constants/globalStyles';
import App from '../App';
import StartGame from './StartGame';
import CustomButton from '../Components/Utils/CustomButton';
const GameOver = props => {
  const [isGameOn, setIsGameOn] = useState(true);
  return isGameOn ? (
    <View style={styles.screen}>
      <Text style={styles.txt}>The Game is Over !!!</Text>
      <Image style={styles.img} source={require('../assets/success.png')} />
      <Text>Good Job</Text>
      <Text style={{ marginVertical: 10 }}>
        it take just {props.rounded} Round to finish the game
      </Text>

      <CustomButton onPress={() => setIsGameOn(false)}>
        Start a new game
      </CustomButton>
    </View>
  ) : (
    <StartGame />
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    marginVertical: 20
  },
  img: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 190,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 350
  }
});
