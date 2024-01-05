import {React,useState,useEffect,createContext, useMemo} from 'react'
import { Alert} from 'react-native'

export const LoginContext = createContext(null);

export function LoginProvider(props) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [logInFlag,setLogInFlag] = useState(false);
  const context = useMemo(()=>{
    return (
      setLogInFlag , logInFlag ,setPassword,password,username,setUsername
    )
  },[]);
  
    return (
    <LoginContext.Provider value={context}>
        {props.children}
    </LoginContext.Provider>
  )
}
