import {React,useState,useEffect,createContext} from 'react'
import { Alert} from 'react-native'

export const LoginContext = createContext();

export function LoginProvider(props) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [logInFlag,setLogInFlag] = useState(false);
  const handleLogin = () =>{
    if(!username || !password){
        Alert.alert('Error','Enter Valid Inputs');
    }
    else{
        if(username === 'Yahya' && password === '@123'){
            setLogInFlag(true);
        }
        else{
            Alert.alert('','Wrong Username or Password');
        }
    }
  };
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
    <LoginContext.Provider value={[handleLogin,handleLogout,logInFlag,setPassword,password,username,setUsername]}>
        {props.children}
    </LoginContext.Provider>
  )
}
