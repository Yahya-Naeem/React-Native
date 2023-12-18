import {KeyboardAvoidingView, Keyboard,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './Todo';
import { useState } from 'react';
export default function Main(){

  const [task,setTask] = useState('');
  const [taskContainer,settaskContainer] = useState([]);
  
  const handleAdd = () =>{
    let temp;
    temp = [...taskContainer,task]
    settaskContainer(temp);
    setTask('');
  }

  const handleRemove = (index) =>{
    Keyboard.dismiss();
    let temp;
    temp = [...taskContainer]
    temp.splice(index,1);
    settaskContainer(temp);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo App</Text>
        <View style={styles.items}>
            {
              taskContainer.map((task,index)=>
              {
                return(
                  <TouchableOpacity key={index} onPress={()=>handleRemove(index)}>
                    <Todo text={task}/>
                  </TouchableOpacity>
                )
              })
            }
        </View>
        </View>
      </ScrollView>
      
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Enter task'} value={task} onChangeText={text=>setTask(text)} />
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
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});