import MyDrawer from  '../navigations/homedrawer';
import TodoPage from '../pages/TodoPage';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();
const MyStack = () =>{
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen 
                name = 'MainPage'
                component={MyDrawer}
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