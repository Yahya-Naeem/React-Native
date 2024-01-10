import {Text,View,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
//importing assets
import Scorpio from '../assets/Food Delivery App (Community)/Scorpio.svg';
import Pizza from '../assets/Food Delivery App (Community)/Pizza1.svg';
import Burger1 from '../assets/Food Delivery App (Community)/Burger1.svg';
import Japanese from '../assets/Food Delivery App (Community)/Pizza.svg';

import CapricciosaPizza from '../assets/CapricciosaPizza.svg';
import CheesePizza from '../assets/CheesePizza.svg';

import AddItem from '../assets/Food Delivery App (Community) (1)/Plus.svg';
import FireEmoji from '../assets/FireEmoji.svg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Menu = () =>{
    return(
        <View style={styles.container}>
            
            <View style={styles.sectioContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.wecomeText}>Hi alex</Text>
                    <Text style={styles.headLine}>Find you Delicious Food</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View >
                        <View  style={styles.border}><Burger1 /></View>
                        <Text>Burger</Text>
                    </View>
                    <View>
                        <View style={styles.border}><Pizza /></View>
                        <Text>Pizza</Text>
                    </View >
                    <View>
                        <View style={styles.border}><Japanese /></View>
                        <Text>Japanese</Text>
                    </View>
                    <View>
                        <View  style={styles.border}><Scorpio /></View>
                        <Text>Scorpio</Text>
                    </View>
                </View>
            </View>

        
        <View style={styles.section2}>
            <Text style={styles.headLine}>
                Popular
            </Text>
            <View style={styles.cardContainer}>
                    <View style={[styles.card,styles.border]}>
                         <View>
                         <Text style={styles.cardText}>Meeting Cheese </Text> 
                         <Text style={styles.miniFont}> 44 Calories </Text> 
                         </View>
                        <View><CheesePizza height={screenHeight*0.2} width={screenWidth*0.45}/></View>
                        <Text style={{color:'#4F4F4F',fontSize:16,marginTop:-10}}><Text style={styles.miniFont}>$</Text>9.47</Text>
                        <View  style={{backgroundColor:'#EB5757',padding:1,borderRadius:3,opacity:0.9,marginTop:10}}><AddItem /></View>
                    </View>

                    <View style={[styles.card,styles.border]}>
                        <Text style={styles.cardText}>Pizza Capricciosa</Text>
                        <Text style={styles.miniFont}> 54 Calories </Text>
                        <CapricciosaPizza height={screenHeight*0.2} width={screenWidth*0.30}/>
                        <Text style={{color:'#4F4F4F',fontSize:16,marginTop:-10}}><Text style={styles.miniFont}>$</Text>9.47</Text>
                        <View  style={{backgroundColor:'#EB5757',padding:1,borderRadius:3,opacity:0.9,marginTop:10}}><AddItem /></View>
                    </View>
            </View>
            <View style={{paddingHorizontal:138,}}>
                <TouchableOpacity style={styles.menuBtn}>
                    <Text style={styles.btnText}>Menu</Text>
                </TouchableOpacity>
            </View>   
        </View>

            
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        paddingHorizontal:23,
        paddingVertical:65,
        backgroundColor:'#ffffff',
        gap:70,
    },
    border:{
        elevation: 4,
        border:1,
        borderRadius: 10,
    },
    sectioContainer:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'flex-starts',
    },
    textContainer:{
        flex:1,
    },
    itemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:5,
        textAlign:'center',
    },
    section2:{
        flex:2,
        justifyContent:'space-around',
    },
    wecomeText:{
        color:'#EB5757',
        fontSize:18,
    },
    headLine:{
        color:'#4F4F4F',
        fontSize:21,
        fontWeight:'bold',
        marginBottom:-20,
    },
    cardContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-evenly',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10, // Add margin top to separate cards
      },
      
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, // Add margin bottom to separate text from the rest
      },
    miniFont:{
        color:'#EB5757',
        fontSize:11
    },
    menuBtn:{
        borderRadius:50,
        backgroundColor:'#EB5757',
        width:screenWidth*0.20,
        height:screenWidth*0.20,
        justifyContent:'center',
        opacity:0.9,
    },
    btnText:{
        fontSize:19,
        color:'#FFFFFF',
        textAlign:'center',
        textAlignVertical:'center',
    },
});
export default Menu;