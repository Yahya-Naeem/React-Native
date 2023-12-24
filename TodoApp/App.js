import 'react-native-gesture-handler';
import React from 'react';
import {View,StyleSheet} from 'react-native';
import ItemProvider from './Contexts/ItemsContext';
import MyStack from './navigations/mainnavigation';
export default function App() {
  return(
    <View style={appStyle.container}>
      <ItemProvider>
        <MyStack />
      </ItemProvider>
    </View>
  )};

  const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      }
    }
  )
