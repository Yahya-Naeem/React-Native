import {React,useContext} from 'react';
import { View ,StyleSheet} from 'react-native'
import {LoginContext} from '../contexts/LoginContext';
import {MyStack,MyTabs,MyDrawer} from '../navigations/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const outerStack = createNativeStackNavigator();
export default function IndexApp(){
  const {logInFlag} = useContext(LoginContext);
  
  return(
   <View style={appStyle.container}>
     <outerStack.Navigator>
              {/*Welcome Page Access */}
             <outerStack.Screen 
                name='AppEntry'                   
                component={MyTabs}
                options={{headerShown: false}}
              />
              {/*Main page access */}
             <outerStack.Screen 
               name='User'                        
               component={MyStack}
               options={{headerShown: false}}
             />
             {/*Setting page access */}
             <outerStack.Screen 
               name='Drawer'                       
               component={MyDrawer}
               options={{headerShown: false}}
             />
     </outerStack.Navigator>
   </View>
  );
 };
 

const appStyle = StyleSheet.create(
    {
      container:{
        flex : 1,
      }
    }
  )