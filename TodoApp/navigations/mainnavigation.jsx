//import {createStackNavigator} from '@react-navigation/stack';
//import {createAppContainer} from 'react-navigation';
import MainPage from  '../pages/MainPage';
import TodoPage from '../pages/TodoPage';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//creating screens 
/* const screens = {
    Home : {  //top is default
        screen : MainPage //screen that'll be appeared
    },
    TaskDetails:{
        screen: TodoPage
    },
}
const MainStack = createStackNavigator(screens); //create stack and pass screens object
export default createAppContainer(MainStack); */
const MainStack = createNativeStackNavigator();
const MyStack = () =>{
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen 
                name = 'MainPage'
                component={MainPage}
                />
                <MainStack.Screen 
                name = 'TodoPage'
                component={TodoPage}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;