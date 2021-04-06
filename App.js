import React ,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './assets/components/Task';


export default function App() {

  const [task,SetTask] = useState();
  const [taskItems,SetTaskItems] = useState([]);

  const handleAddTask =()=>{
    //console.log(task);
    Keyboard.dismiss();
    SetTaskItems([...taskItems,task])
    SetTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    SetTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          
           {
             taskItems.map((item,index) => {
               return ( 
                <TouchableOpacity key={index}  onPress={() => completeTask()}>
                   <Task  text={item} /> 
                </TouchableOpacity>)
             
               
             })
             
           }
           
        </View>
      </View>

      <KeyboardAvoidingView
       behavior={Platform.os === "ios" ? "padding" :"height"}
       style={styles.writeTaskWrapper}
       >
         <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text =>SetTask(text)}/>
         <TouchableOpacity onPress={()=> handleAddTask()}>
           <View style={styles.addWrapper}>
             <Text style={styles.addText}>+</Text>
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
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,

  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
  },
  addText:{},
});
