// App.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now().toString(), 
        name: task,
      };
      setTasks([...tasks, newTask]); 
      setTask(''); 
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <AddTask task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
