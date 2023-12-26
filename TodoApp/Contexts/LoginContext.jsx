import {React,useState,useEffect,createContext} from 'react'
import { Alert} from 'react-native'

export const LoginContext = createContext(null);

export function LoginProvider(props) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [logInFlag,setLogInFlag] = useState(false);
  
  
    return (
    <LoginContext.Provider value={[setLogInFlag,logInFlag,setPassword,password,username,setUsername]}>
        {props.children}
    </LoginContext.Provider>
  )
}
