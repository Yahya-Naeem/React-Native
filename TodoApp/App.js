import React from 'react';
import {View,StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import IndexApp from './pages/index';
import {NavigationContainer} from '@react-navigation/native';
import ItemProvider from './contexts/ItemsContext';
import {LoginProvider} from './contexts/LoginContext';
export default function App() {
  return(
    <View style={appStyle.container}>
      <NavigationContainer>
      <ItemProvider>
        <LoginProvider>
          <IndexApp />
        </LoginProvider>
        </ItemProvider>
      </NavigationContainer>
    </View>
  )};

  const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      }
    }
  )
