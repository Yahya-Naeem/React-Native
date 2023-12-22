import {React,useState,useContext,createContext} from 'react';
export const ItemContext = createContext();
const ItemsProvider = (props) => {
    const [taskContainer,setTaskContainer] = useState([]);
    return(
        <ItemContext.Provider value={[taskContainer,setTaskContainer]}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemsProvider;