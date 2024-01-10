import {Text,View,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import {React } from 'react';
import { useNavigation } from '@react-navigation/native';
import DeliveryMan from '../assets/deliveryMan.svg';
import Background from './../assets/Background.svg';



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Welcome = () => {
    const navigation = useNavigation();

   const handleGetStarted = () =>{
    navigation.navigate('Menu');
   };
   return(
    <>
    <Background style={styles.Background}/>
    <View style={styles.container}> 

           <View style={styles.firstView}>
               <DeliveryMan style={styles.Firstitem} height={screenHeight*0.60} width={screenWidth}/>
           </View>
           <View style={styles.cardcontainer}>
               <View style={styles.card}> 
                        <Text style={styles.tagText}>
                                Quick Delivery at Your <Text style={{color:'#ea615b'}}>Doorstep</Text>
                        </Text>
                        <Text style={{textAlign:'center'}}>
                        Home delivery and onlione reservation system for retaurants and cafe
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                            <Text style={styles.buttonText}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
               
           </View>
       </View>
    </>
       
   );   
}

export default Welcome;

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'flex-end',     
   },
   Background:{
       position:'absolute',
       flex:1,
       zIndex:1,
   },
   firstView:{
       flex: 1,
       alignItems:'center',
   },
   Firstitem:{
       position: 'absolute',
       zIndex: 2,
   },
   cardcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        paddingHorizontal:36,
        paddingVertical:16,
   },
   card:{
    position: 'absolute',

    zIndex: 2,
    backgroundColor:'white',
    paddingHorizontal:27,
    paddingVertical:24,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
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