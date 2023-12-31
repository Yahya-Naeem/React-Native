import React from 'react';
import { View ,Text,StyleSheet,Button} from 'react-native';


export default function Welcome({navigation}) {
  const navSignup = () =>{
    navigation.navigate('Signup');
  }
  const navLogin = () =>{
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Text style={styles.title}>
          Todo App
        </Text>
      </View>
      <View style={styles.rowcontainer}>
        <Text style={styles.taglinetext}>
          Stay organized and align your tasks effortlessly with our Todo App. Streamline your day, prioritize your goals, and enhance productivity with ease.
        </Text>
      </View>
        <View style={[styles.rowcontainer,{flex:1}]}>
            <View style={styles.button}>
              <Button
              title='Get Started'
              onPress={navSignup} 
              color="#fff"    
              />
            </View>
            <Text style={styles.linktext} onPress={navLogin}>
                Already have an Account ?
            </Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    padding:10,
  },
  rowcontainer:{
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
  },
  button:{
    backgroundColor:'#55BCF6',
    height:35,
    width:150,
  },
  linktext:{
    color:'#55BCF6',
    fontWeight:'bold',
  },
  taglinetext:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontFamily: 'Arial', // Set your preferred font family here
  },
  title:{
    textAlign:'left',
    fontSize:35,
    fontWeight:'bold',
    color:'#55BCF6',
    marginBottom: -150, // Add some bottom margin for separation
  }
})