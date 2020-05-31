import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../Components/Layouts/Card';
import ShowGuss from '../Components/Layouts/ShowGuss';
import CustomButton from '../Components/Utils/CustomButton';
import GameOver from './GameOver';
import { Ionicons } from '@expo/vector-icons';

const TheGame = props => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [isTheGameOver, setIsTheGameOver] = useState(false);
  const [rounded, setUpRounde] = useState(1);
  ///  calld AFTER Render
  useEffect(() => {
    gussRandomNumber == props.exclude ? setIsTheGameOver(true) : null;
  });

  const ganerateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndmNumber = Math.floor(Math.random() * (max - min) + min);

    if (rndmNumber == exclude) {
      return ganerateRandomNumber(min, max, exclude);
    } else return rndmNumber;
  };
  const [gussRandomNumber, SetGussRandomNumber] = useState(
    ganerateRandomNumber(1, 100, props.exclude)
  );
  const nextGussNumber = dir => {
    if (
      (dir === 'More' && gussRandomNumber > props.exclude) ||
      (dir === 'Less' && gussRandomNumber < props.exclude)
    ) {
      Alert.alert('Dont lie', 'You know that it WRONG', [
        { style: 'cancel', text: 'Sorry' }
      ]);

      return;
    } else {
      if (dir === 'More') {
        currentLow.current = gussRandomNumber;
      } else {
        currentHigh.current = gussRandomNumber;
      }
      const nextGuss = ganerateRandomNumber(
        currentLow.current,
        currentHigh.current,
        gussRandomNumber
      );
      setUpRounde(rounded + 1);
      SetGussRandomNumber(nextGuss);
    }
  };

  return isTheGameOver ? (
    <GameOver rounded={rounded}></GameOver>
  ) : (
    <View style={styles.container}>
      <Card style={styles.infoGuss}>
        <Text style={styles.txt}>Opponet's Guss</Text>
        <ShowGuss gussinNumber={gussRandomNumber} />
      </Card>
      <View>
        <Card style={styles.btnContainer}>
          <CustomButton onPress={dir => nextGussNumber('Less')}>
            <Ionicons name='md-remove' size={28} color='white' />
          </CustomButton>
          <CustomButton onPress={dir => nextGussNumber('More')}>
            <Ionicons name='md-add' size={28} color='white' />
          </CustomButton>
        </Card>
      </View>
    </View>
  );
};

export default TheGame;

const styles = StyleSheet.create({
  container: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txt: {
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 19
  },
  infoGuss: {
    width: '40%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,

    height: 100
  }
});
