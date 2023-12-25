import React, { useContext } from 'react'
import { TouchableOpacity,StyleSheet,TextInput ,View ,Text} from 'react-native'
import {LoginContext} from '../Contexts/LoginContext';
export default function Login() {
  const [handleLogin,handleLogout,logInFlag,setPassword,password,username,setUsername] = useContext(LoginContext);
  return (
    <View style={styles.container}>
        <View style={styles.rowcontainer}>
          <Text style={styles.title}>
              Login
          </Text>
        </View>
        <View style={styles.rowcontainer}>  
          <TextInput style={styles.input} placeholder={'Username*'} value={username} onChangeText={text1=>setUsername(text1)} />
          <TextInput style={styles.input} placeholder={'Password*'} value={password} onChangeText={text2=>setPassword(text2)} />
          
          <TouchableOpacity  >
              <View style={styles.LogWrapper} onPress={()=>handleLogin()}>
                  <Text>Login</Text>
              </View>
            </TouchableOpacity>
        </View>
        
        <View style={styles.rowcontainer}>
          
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED',
    padding:10,
  },
  rowcontainer:{
    flex:1,
    padding:25,
    flexDirection:'column',
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
    backgroundColor: '#FFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
})