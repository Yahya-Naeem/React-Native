import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
              <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={{
                  tabBarIcon: ({ color, size,focused }) => (
                    <MaterialCommunityIcons name="circle" color={focused ? '#55BCF6' : color} size={size} />
                  ),
              }}
              />
              <Tab.Screen
                name="Login"
                component={Login}
                options={{
                  tabBarIcon: ({ color, size,focused }) => (
                    <MaterialCommunityIcons name="circle" color={focused ? '#55BCF6' : color} size={size} />
                  ),
              }}
              />
              <Tab.Screen
                name="Signup"
                component={SignUp}
                options={{
                  tabBarIcon: ({ color, size ,focused }) => (
                    <MaterialCommunityIcons name="circle" color={focused ? '#55BCF6' : color} size={size} />
                  ),
              }}
              />
      </Tab.Navigator>
  );
}

