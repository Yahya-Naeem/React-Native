import {React,useContext} from 'react';
import { View ,StyleSheet} from 'react-native'
import {LoginContext} from '../Contexts/LoginContext';
import ItemProvider from '../Contexts/ItemsContext';
import {MyStack,MyTabs} from '../navigations/index';

export default function IndexApp() {
  const {logInFlag} = useContext(LoginContext);
  
return (
    <View style={appStyle.container}>

    {/**Consitional Rendering for New User */}

    {
      !logInFlag && 
      
        <MyTabs />
      
    }

    {/**Conditional rendering for authentic User */}

    {logInFlag && 
    <ItemProvider>
      <MyStack />
    </ItemProvider>}
  </View>
  )
};

const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      }
    }
  )