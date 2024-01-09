import {Text,View,SafeAreaView,StyleSheet,Image,Dimensions, TouchableOpacity} from 'react-native';
import {React } from 'react';
import DeliveryMan from '../assets/deliveryMan.svg';
import Background from './../assets/Background.svg';
import Rectangle from '../assets/Rectangle.svg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Welcome = (navigation) => {
   const handleGetStarted = () =>{
   };
   return(
       <View style={styles.container}> 
           <Background style={styles.Background}/>
           <View style={styles.firstView}>
               <DeliveryMan style={styles.Firstitem} height={screenHeight*0.50}/>
           </View>
{/** can use {'\n} for next line  */}
           <View style={styles.container}>
               <Rectangle style={[styles.Background,{left:15,}]}/>
               <View style={[styles.Firstitem,{paddingHorizontal:50,paddingVertical:40,}]}>
                    <View style={{paddingHorizontal:30,justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.tagText}>
                                Quick Delivery at Your <Text style={{color:'#ea615b'}}>Doorstep</Text>
                        </Text>
                        <Text style={{textAlign:'center'}}>
                        Home delivery and onlione reservation system for retaurants and cafe
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>
           </View>
       </View>
   );   
}

export default Welcome;

const styles = StyleSheet.create({
   container:{
       flex:1,
       position:'relative',
       width:'100%',
       justifyContent:'center',
   },
   Background:{
       position:'absolute',
       flex:1,
       top:0,
       bottom:0,
       left: 0,
       right: 0,
       zIndex:1,
   },
   firstView:{
       flex: 1,
   },
   Firstitem:{
       position: 'absolute',
       width: '100%',
       top: 10,
       zIndex: 2,
   },
   button:{
    backgroundColor:'#ea615b',
    borderRadius:30,
    padding:15,
    width:screenWidth*0.50,
    marginTop:30,
   },
   buttonText:{
    textAlign:'center',
    color:'white',
    fontSize:18.5
    },
   tagText:{
    fontSize:31,
    fontWeight:'bold',
    color:'black',
    textAlign:'center'
    },
});
