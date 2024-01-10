import {Text,View,StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

//importing assets
import AddItem from '../assets/Food Delivery App (Community) (1)/Plus.svg';
import RmItem from '../assets/Food Delivery App (Community) (1)/Subtract.svg';
import Pizza from '../assets/PizzaItem.svg';
import Fire from '../assets/FireEmoji.svg';
import Time from '../assets/Time.svg';

export default function Item() {
    const [selectedValue, setSelectedValue] = useState('option1');
    const navigation = useNavigation();
    const handleBack=()=>{
        navigation.goBack();
    };
    const handleRadioButtonPress = (value) => {
        setSelectedValue(value);
        }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable onPress={handleBack}>
            <Icon name="left" size={25} color="black" />
            </Pressable>
            <Icon name="hearto" size={25} color="black" />
        </View>
        <Text style={[styles.itemHeading,{fontWeight:'bold'}]}>Melting Cheese</Text>
        <Text style={styles.itemHeading}><Text style={styles.miniFont}>$</Text>9.47</Text>
            <Pizza height={'40%'} />
        <View style={styles.operationContainer}>
            <View style={{backgroundColor:'#EB5757',opacity:0.9,height:20,borderRadius:3}}><RmItem /></View>
            <Text>2</Text>
            <View style={{backgroundColor:'#EB5757',opacity:0.9,height:20,borderRadius:3}}><AddItem /></View>
        </View>
        <Text style={[styles.miniFont,{color:'#828282',textAlign:'center'}]}>$19.34</Text>
        <RadioButton.Group
        onValueChange={handleRadioButtonPress}
        value = {selectedValue}
        >
            <View style={styles.radioContainer}>
                <View style={styles.radioItem}>
                    <RadioButton value='option1' color={selectedValue==='option1'?'#EB5757':'white'} />
                    <Text style={{color:'#BDBDBD',fontSize:11}}>$6.44</Text>
                    <Text style={{color:'black',fontSize:14}}>8 inch</Text>
                </View>

                <View style={styles.radioItem}>
                    <RadioButton value='option2' color={selectedValue==='option2'?'#EB5757':'white'} />
                    <Text style={{color:'#BDBDBD',fontSize:11}}>$9.47</Text>
                    <Text style={{color:'black',fontSize:14}}>12 inch</Text>
                </View>

                <View style={styles.radioItem}>
                    <RadioButton value='option3' color={selectedValue==='option3'?'#EB5757':'white'} />
                    <Text style={{color:'#BDBDBD',fontSize:11}}>$15.32</Text>
                    <Text style={{color:'black',fontSize:14}}>16 inch</Text>
                </View>
            </View>
        </RadioButton.Group>
        <View style={styles.detailsContainer}>
            <View style={styles.details}>
                <IconFA name='star' color='orange' size={20}/>
                <Text style={{color:'black',fontSize:16}}> 4.9</Text>
            </View>

            <View style={styles.details}>
                <Fire />
                <Text style={{color:'black',fontSize:16}}> 44 Calories</Text>
            </View>

            <View style={styles.details}>
                <Time />
                <Text style={{color:'black',fontSize:16}}> 20 - 30 min</Text>
            </View>
        </View>
        <View style={styles.btnContainer}>
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}> ADD TO CART </Text>
            </Pressable>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:11,
        paddingBottom:31,
    },
    header:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    miniFont:{
        fontSize:14,
        color:'#EB5757',
    },
    itemHeading:{
        color:'#4F4F4F',
        fontSize:21,
        textAlign:'center',
    },
    operationContainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
        marginBottom:'3%',
    },
    radioContainer:{
        marginTop:'18%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    radioItem:{
        alignItems:'center',
    },
    detailsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingBottom:32,
        paddingTop:39,
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
    },
    btnContainer:{
        paddingHorizontal:45,
    },
    btn:{
        backgroundColor:'#EB5757',
        opacity:0.80,
        borderRadius:10,
    },
    btnText:{
        fontSize:22,
        fontWeight:'500',
        color:'white',
        textAlign:'center',
        paddingHorizontal:75,
        paddingVertical:10,
    },
});