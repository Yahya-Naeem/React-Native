import { TouchableOpacity,StyleSheet,TextInput ,View ,Text} from 'react-native'
import React from 'react';
export default function SignUp() {
  return (
    <View style={styles.container}>
        <View style={styles.rowcontainer}> 
          <Text style={styles.title}>
              Sign Up
          </Text> 
          <TextInput style={styles.input} placeholder={'Enter Name*'}  />
          <TextInput style={styles.input} placeholder={'Add Password*'}  />
          <TextInput style={styles.input} placeholder={'Re-enter Password*'}  />

          <TouchableOpacity >
              <View style={[styles.LogWrapper, {backgroundColor: '#55BCF6',borderColor:'#55BCF6'}]} >
                  <Text>Signup</Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  rowcontainer:{
    flex:1,
    padding:12,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
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
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 350,
  },
  LogWrapper: {
    
    width: 70,
    height: 40,
    backgroundColor: '#FFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
})