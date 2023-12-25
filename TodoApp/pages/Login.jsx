import React from 'react'
import { StyleSheet,Textinput ,View ,Text} from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.rowcontainer}>
          <Text style={styles.title}>
              Login
          </Text>
        </View>
        <View style={styles.rowcontainer}>
          <Textinput style={styles.title} placeholder='Enter Username'/>
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