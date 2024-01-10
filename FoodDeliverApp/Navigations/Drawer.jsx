import Menu from '../pages/Menu';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Search from '../assets/Search.svg';
const Drawer = createDrawerNavigator();
export default function MyDrawer(){
    const SvgComponent = () => (
        <View style={{backgroundColor: '#EB5757', alignItems: 'center',justifyContent:'center', opacity:0.9,borderRadius:25,padding:3}}>
          <Search  height={'65%'} width={30}/>
        </View>
       );
       
    return(
        <Drawer.Navigator initialRouteName='Menu' screenOptions={{ 
            headerTitle: ()=><SvgComponent />, // Set header title to an empty string
        }}
        >
            <Drawer.Screen name='MenuDrawer' component={Menu} />
        </Drawer.Navigator>
    )
    
};