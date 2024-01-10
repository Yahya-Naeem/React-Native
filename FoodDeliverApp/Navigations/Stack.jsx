import Menu from './Drawer';
import Welcome from '../pages/Welcome';
import Item from '../pages/Items';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Mystack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Welcome' options={{headerShown:false}} component={Welcome} />
            <Stack.Screen name='Menu' options={{headerShown:false}} component={Menu} />
            <Stack.Screen name='Item' options={{headerShown:false}} component={Item} />
        </Stack.Navigator>
    )
    
};