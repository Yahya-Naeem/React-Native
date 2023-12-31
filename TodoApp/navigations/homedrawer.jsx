import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../pages/Settings.jsx';
import Main from '../pages/MainPage.jsx';
import {LoginProvider} from '../contexts/LoginContext.jsx';
const HomeDrawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <LoginProvider>
            <HomeDrawer.Navigator>
            <HomeDrawer.Screen name='MainPage' component={Main} />
            <HomeDrawer.Screen name='Settings' component={Setting}/>
        </HomeDrawer.Navigator>
        </LoginProvider>
        
    );
};
export default MyDrawer;