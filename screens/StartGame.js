import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import InfoStart from '../Components/InfoStart';
import color from '../constants/color';
import Card from '../Components/Layouts/Card';
import ShowNumber from '../Components/Layouts/ShowNumber';
import CustomButton from '../Components/Utils/CustomButton';
import Input from '../Components/Utils/Input';
import TheGame from './TheGame';
import globalStyle from '../constants/globalStyles';
const StartGame = props => {
  const [inputNumberText, setInputNumberText] = useState('');
  const [isChoosnumber, SetChoosnumber] = useState(false);
  const [SelectedNumber, SetSelectedNumber] = useState('');
  const [startGame, setStartGame] = useState(false);
  const inputNumberHandler = text => {
    setInputNumberText(text.replace(/[^0-9]/g, ''));
    SetChoosnumber(false);
  };
  const closeKeyboardHandler = () => {
    Keyboard.dismiss();
  };
  const onRestHandler = () => {
    setInputNumberText('');
    SetChoosnumber(false);
  };
  const confirmHandler = () => {
    const confirmNumber = parseInt(inputNumberText);

    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
      Alert.alert('Invaild Number', 'The number must between 1-99', [
        { text: 'Okey', style: 'destructive', onPress: onRestHandler }
      ]);
      return;
    }
    setInputNumberText('');
    SetChoosnumber(true);
    SetSelectedNumber(confirmNumber);
    Keyboard.dismiss();
  };
  const startGameHandler = () => {
    setStartGame(true);
  };

  const ShowInfo = isChoosnumber ? (
    <ShowNumber>
      <InfoStart
        onPress={startGameHandler}
        style={styles.info}
        number={SelectedNumber}
      ></InfoStart>
    </ShowNumber>
  ) : null;

  return startGame ? (
    <TheGame exclude={SelectedNumber} />
  ) : (
    <TouchableWithoutFeedback onPress={closeKeyboardHandler}>
      <View style={styles.screen}>
        <Text style={styles.txtStyle}>Start a Game</Text>
        <Card>
          <View style={styles.inputContainer}>
            <Text style={globalStyle.primaryFont}>Select A Number</Text>
            <Input
              style={styles.input}
              maxLength={2}
              keyboardType='number-pad'
              value={inputNumberText}
              onChangeText={inputNumberHandler}
            />

            <View style={styles.btnsLayout}>
              <View style={styles.btnn}>
                <Button
                  color={color.primary}
                  title='Confirm'
                  onPress={confirmHandler}
                />
              </View>
              <View style={styles.btnn}>
                <Button
                  onPress={onRestHandler}
                  color={color.secondery}
                  title='Rest'
                />
              </View>
            </View>
          </View>
        </Card>
        <View style={styles.info}>{ShowInfo}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: 'center',
    padding: 10
  },

  info: {
    margin: 30,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginVertical: 40,
    maxWidth: '80%',
    width: 300,
    alignItems: 'center'
  },

  txtStyle: {
    fontSize: 24,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  btnsLayout: {
    width: '100%',
    paddingTop: 16,
    flexDirection: 'row',

    justifyContent: 'space-around'
  },
  btnn: {
    width: 100,
    borderRadius: 50
  },
  input: {
    width: 40,
    textAlign: 'center'
  }
});
