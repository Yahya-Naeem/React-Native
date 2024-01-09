/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//import components 
import Welcome from './pages/Welcome';
import Menu from './pages/Menu';
function App(){

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <NavigationContainer>
        <Menu />
      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
  },
 
});

export default App;
