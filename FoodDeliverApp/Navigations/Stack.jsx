import Menu from '../pages/Menu';
import Welcome from '../pages/Welcome';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Mystack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Welcome' options={{headerShown:false}} component={Welcome} />
            <Stack.Screen name='Menu' options={{headerShown:false}} component={Menu} />
        </Stack.Navigator>
    )
    
};