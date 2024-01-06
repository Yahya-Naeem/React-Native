import {React, useContext,useState,useEffect } from 'react';
import Todo from  '../components/Todo';
import {View,Alert,Keyboard,ScrollView,Text,TextInput,SafeAreaView,KeyboardAvoidingView,TouchableOpacity,StyleSheet} from 'react-native';
import { ItemContext } from '../Contexts/ItemsContext';
const TodoPage = ({route,navigation}) =>{
    //add delete and edit function
    const {title , descr} = route.params;
    const [taskContainer,setTaskContainer] = useContext(ItemContext);
    
    //for user inputs
    const [task,setTask] = useState(title);
    const [description,SetDescription] = useState(descr);
    //for rener purpouses
    const [taskRender,setTaskRender] = useState(title);
    const [descriptionRender,SetDescriptionRender] = useState(descr);

    //Function to delete
    const handleRemove = () =>{
    Keyboard.dismiss(); //close keyboard
    let index = taskContainer.findIndex(task=>task.task===title);
    let temp;
    temp = [...taskContainer]
    temp.splice(index,1);
    setTaskContainer(temp);
    //setTask('');
    Alert.alert('','Task Deleted Successfully'); //notify user
    navigation.goBack();  
  };
    
  //Function to edit 
    const handleEdit =()=>{
        const obj ={
            task:task,
            description:description,
        };
        let index = taskContainer.findIndex(item=>item.task === task)
        taskContainer[index] = obj ;
        setTaskContainer(taskContainer);
        Alert.alert('','Task Edited Successfully'); //notify user
        setTaskRender(task);
        SetDescriptionRender(description);
        navigation.goBack();  
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tasksWrapper}>
                    <View style={styles.items}>
                        <Todo text={taskRender} description={descriptionRender} />
                    </View>
                </View>
            </ScrollView>

            <View>
            <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                
                {/**Edit Option */}
                <TextInput style={styles.input} placeholder={'Title*'} value={task} onChangeText={text1=>setTask(text1)} />
                <TextInput style={styles.input} placeholder={'Description*'} value={description} onChangeText={text2=>SetDescription(text2)} />
                <TouchableOpacity onPress={()=>handleEdit()} >
                    <View style={styles.addWrapper}>
                        <Text>Edit</Text>
                    </View>
                </TouchableOpacity>

                {/**Delete button */}
                <View style={styles.writeTaskWrapper}>
                     <TouchableOpacity onPress={handleRemove}>
                        <View style={styles.delWrapper}>
                            <Text style={styles.delText}> Delete </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>      
            </View>
        </View>
    );
}
export default TodoPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
      },
    addWrapper: {
        width: 40,
        height: 40,
        backgroundColor: '#55BCF6',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      delWrapper:{
        width: 350,
        height: 40,
        borderBlockColor:'red',
        backgroundColor: 'red',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      delText:{
        color:'#fff',
        fontSize:20,
        alignContent:'center',
        justifyContent:'center',
      },
      tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        flex:1,
        position: 'absolute',
        bottom: 60,
        width: '100%',
        paddingHorizontal:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        flex:0.45,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
      },
})