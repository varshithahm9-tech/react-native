import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TabTwoScreen() {

const[task,setTask]=useState('');
const [tasks, setTasks] = useState([]);

const addTask = () => {
  if (task.trim() === "") return;
  console.log(task.trim());

  setTasks([
    ...tasks,
    {
      id: Date.now().toString(),
      title: task,
    },
  ]);

  setTask("");
};

const deleteTask = (id)=> {
    setTasks(tasks =>  tasks.filter(item => item.id !== id));
    console.log(id,tasks);
}

    return(
        <View style={{padding:50}}>
            <TextInput
              placeholder="Enter task"
              value={task}
              onChangeText={setTask}
              style={styles.input}
            />
            <Button title="add" color="green" onPress={addTask} />

            <FlatList
            data={tasks}
            renderItem={({item})=>(
                // <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                //     <Text>{item.title}</Text>

                //     <Button
                //     title="delete"
                //     onPress={() => deleteTask(item.id)}
                //     />
                // </View>
                <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.Button}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item)=>item.id}

            />
        </View>

    )
}
const styles= StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 1,
    padding: 5,
    borderRadius: 3
  },
  Button:{
    width:200,
    padding:20,
    margin:20,
    backgroundColor:"pink",
    borderRadius:3
  }
})