import 'react-native-gesture-handler';
import React from 'react';
import {View,StyleSheet} from 'react-native';
import {LoginProvider} from './Contexts/LoginContext';
import IndexApp from './pages/index';
export default function App() {
  return(
    <View style={appStyle.container}>
      <LoginProvider>
        <IndexApp />
      </LoginProvider>
    </View>
  )};

  const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      }
    }
  )
