import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Layouts/Header';
import StartGame from './screens/StartGame';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const loadFonts = () => {
    return Fonts.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
