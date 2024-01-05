import {React,useContext} from 'react'
import {View,StyleSheet,Text} from 'react-native';
import LoginContext from '../Contexts/LoginContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Settings({navigation}) {
  //const {Username} = useContext(LoginContext);
  const handleLogout = () =>{
    Alert.alert('Logout','Are You Sure, you want to Logout ?',[
        {
            text: 'Yes',
            onPress:()=>{
                setLogInFlag(false);
            },
        },
        {
            text: 'No',
            onPress:()=>{
                return;
            },
        },
    ],
    {
        cancelable:false
    });
  };
  return (
    <View style={styles.container}>
        <View style={styles.rowcontainer}>
          <View style={{flex:1,marginTop:20}}>
          <Text style={[styles.title,{color:'#fff'}]}>
              Welcome to <Text style={{color:'#55BCF6'}}>Settings</Text> 
          </Text>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>navigation.navigate('AppEntry')}>
              <View style={styles.LogWrapper}>
                <Text>
                  Logout
                </Text>
              </View>
          </TouchableOpacity>
          </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    padding:10,
  },
  rowcontainer:{
    flex:1,
    padding:25,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:-400,
  },
 
  linktext:{
    color:'#55BCF6',
    fontWeight:'bold',
  },
  taglinetext:{
    fontSize:20,
    textAlign:'center',
    fontFamily: 'Arial', // Set your preferred font family here
  },
  title:{
    textAlign:'left',
    fontSize:35,
    fontWeight:'bold',
    color:'#55BCF6',
    marginBottom: -150, // Add some bottom margin for separation
  },
  input: {
    flex:1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  LogWrapper: {
    width: 70,
    height: 40,
    backgroundColor: '#55BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
})