/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import IndexApp from './pages/index';
import {NavigationContainer} from '@react-navigation/native';
import ItemProvider from './Contexts/ItemsContext';
import {LoginProvider} from './Contexts/LoginContext';




function App(){
  return (
    <View style={appStyle.container}>
      <NavigationContainer>
      <ItemProvider>
        <LoginProvider>
          <IndexApp />
        </LoginProvider>
        </ItemProvider>
      </NavigationContainer>
    </View>
  );
}

 const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      },
    }
  );

export default App;
