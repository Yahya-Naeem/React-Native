import {Text,View,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
//importing assets
import Burger from '../assets/Food Delivery App (Community)/Burger.svg';
import Pizza from '../assets/Food Delivery App (Community)/Pizza.svg';
import Scorpio from '../assets/Food Delivery App (Community)/Scorpio.svg';
import Japanese from '../assets/Food Delivery App (Community)/Japanese.svg';

import CapricciosaPizza from '../assets/CapricciosaPizza.svg';
import CheesePizza from '../assets/CheesePizza.svg';

import AddItem from '../assets/Food Delivery App (Community) (1)/Plus.svg';
import FireEmoji from '../assets/FireEmoji.svg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Menu = () =>{
    return(
        <View style={styles.container}>
        <View >
            <View style={styles.sectioContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.wecomeText}>Hi alex</Text>
                    <Text style={styles.headLine}>Find you Delicious Food</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Burger />
                    <Pizza />
                    <Japanese />
                    <Scorpio />
                </View>
            </View>
        </View>
        <Text style={styles.headLine}>
            Popular
        </Text>
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Text>Meeting Cheese</Text>
                <View > 
                    
                    <Text style={styles.miniFont}> 44 Calories </Text> 
                </View>
                <CheesePizza height={screenHeight*0.4} width={screenWidth*0.45}/>
                <Text style={{color:'4F4F4F',fontSize:16}}><Text style={styles.miniFont}>$</Text>9.47</Text>
                <AddItem />
            </View>

            <View style={styles.card}>
                <Text>Pizza Capricciosa</Text>
                <Text> 54 Calories </Text>
                <CapricciosaPizza height={screenHeight*0.4} width={screenWidth*0.45}/>
                <Text style={{color:'4F4F4F',fontSize:16}}><Text style={styles.miniFont}>$</Text>12.45</Text>
                <AddItem />
            </View>
        </View>
        <View style={styles.sectioContainer}>
            <TouchableOpacity style={styles.menuBtn}>
                <Text style={styles.btnText}>Menu</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        paddingHorizontal:10,
        paddingVertical:20,
    },
    sectioContainer:{
        paddingVertical:10,
        flex:3,
    },
    wecomeText:{
        color:'EB5757',
        fontSize:18,
    },
    textContainer:{
        flex:1,
    },
    itemContainer:{
        flex:1,
        flexDirection:'row',
        gap:5,
    },
    headLine:{
        color:'4F4F4F',
        fontSize:21,
        fontWeight:'bold',
    },
    cardContainer:{
        flex:4,
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    card:{
        display:'block',
        gap:0,
        border:25,
        borderColor:'black',
        height:screenHeight*0.4,
        width:screenWidth*0.4,
        alignItems:'center',
        justifyContent:'center',
    },
    miniFont:{
        color:'EB5757',
        fontSize:11
    },
    menuBtn:{
        borderRadius:50,
    },
    btnText:{
        fontSize:19,
        color:'FFFFFF',
    },
});
export default Menu;