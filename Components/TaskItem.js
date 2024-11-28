// components/TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Icono para eliminar tarea

const TaskItem = ({ task, removeTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.name}</Text>
      <TouchableOpacity onPress={() => removeTask(task.id)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskItem;