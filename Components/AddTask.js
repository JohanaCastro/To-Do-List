// components/AddTask.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  // Icono para agregar tarea

const AddTask = ({ task, setTask, addTask }) => {
  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.input}
        placeholder="Añadir tarea"
        value={task}
        onChangeText={setTask}  // Actualiza el estado de 'task'
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTask;