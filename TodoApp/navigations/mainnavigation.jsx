import MyDrawer from  '../navigations/homedrawer';
import TodoPage from '../pages/TodoPage';
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();
const MyStack = () =>{
    return(
        
            <MainStack.Navigator>
                <MainStack.Screen 
                name = 'MainPage'
                component={MyDrawer}
                options = {{headerShown:false}}
                />
                <MainStack.Screen 
                name = 'TodoPage'
                component={TodoPage}
                />
            </MainStack.Navigator>
        
    );
};
export default MyStack;