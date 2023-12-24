import {KeyboardAvoidingView,Alert, Keyboard,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { ItemContext } from '../Contexts/ItemsContext';
import Todo from '../components/Todo';

//Main component
export default function Main({navigation}){
  const [task,setTask] = useState('');
  const [description,setDescription] = useState('')
  const [taskContainer,setTaskContainer] = useContext(ItemContext);
  const [searchTask,setSearchTask] = useState('');
  
  useEffect(()=>{},[taskContainer])
  const handleAdd = () =>{
    //making object
    if(!description || !task)
    {
      Alert.alert('','Fill the input fields correctly');
      return;
    } 
    else{
      const obj = {
        task:task,
        description:description,
      }
      setTaskContainer([...taskContainer,obj]);
      setTask('');
      setDescription('');
    } 
  }
  const handledetails = (index) =>{
    Keyboard.dismiss();
    let task = taskContainer[index];
    navigation.navigate('TodoPage', { 
      title:task.task,
      descr:task.description ,
      });
  }
  const handleSearch = () =>{
    if(!searchTask){   //if input added
      Alert.alert('','Add Task Title to be Searched');
      return;
    }
    else{   
      let index = taskContainer.findIndex(item=>item.task===searchTask);
      if(index!==-1){  //if result found
        let task = taskContainer[index];
        navigation.navigate('TodoPage', { 
          title:task.task,
          descr:task.description ,
          });
      }
      else{
        Alert.alert('','No items Found')
      }
      setSearchTask('');  //empty field
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
            <TextInput style={styles.searchInput} placeholder={'Search Item'} value={searchTask} onChangeText={text=>setSearchTask(text)} />
            {/**Add button for search  */}
            <TouchableOpacity
            onPress={handleSearch}
            >
              <View style={styles.searchButton}>
                <Text>
                  Search
                </Text>
              </View>
            </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.tasksWrapper}>  
        <Text style={styles.sectionTitle}>To-do</Text>
        <View style={styles.items}>
            {
              taskContainer.map((task,index)=>
              {
                return(
                  <TouchableOpacity key={index} onPress={()=>handledetails(index)}>
                    <Todo text={task.task} description={task.description} />
                  </TouchableOpacity>
                )
              })
            }
        </View>
        </View>
      </ScrollView>
      
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Title*'} value={task} onChangeText={text1=>setTask(text1)} />
          <TextInput style={styles.input} placeholder={'Description*'} value={description} onChangeText={text2=>setDescription(text2)} />
          <TouchableOpacity onPress={()=>handleAdd()} >
            <View style={styles.addWrapper}>
                <Text>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    flex:0.5,
    fontSize: 24,
    fontWeight: 'bold'
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
  
  Header:{
    paddingTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems:'center',
   },
   
  searchInput:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    flex:0.95,
  },
  
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});