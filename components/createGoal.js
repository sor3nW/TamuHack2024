import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update} from "firebase/database";
import {lightColors} from '../lightMode.json';
import { db } from '../firebase.js';
const lightTheme = {lightColors};

export default function CreateGoal() {
  const [budget, setBudget] = useState('');
  const [tempBudget, setTempBudget] = useState('');
  const [budgetName, setBudgetName] = useState('');

  const handleBudgetChange = (text) => {
    // Allow only numeric input
    const numericInput = text.replace(/[^0-9]/g, '');
    setTempBudget(numericInput);
    setBudget(numericInput);
  };
  
  function createBudget(){
    // const newKey = push(child(ref(database), 'users')).key;
    set(ref(db, 'users/goals/' + budgetName), {
      goalName: budgetName,
      goal: budget,
      totalSaved: 0
    }).then(() => {
      alert('Goal Added')
    })
    .catch((error) => {
      alert(error)
    });
    setTempBudget('');
    setBudgetName('');
  }

  
  
  return (
      <>
      <View style={customInputStyles.container}>
        
        <TextInput
            placeholder="Goal Name"
            value={budgetName}
            style={customInputStyles.input}
            onChangeText={(budgetName) => setBudgetName(budgetName)}
          />
          <TextInput
            keyboardType='numeric'
            placeholder="Enter $Amount"
            value={tempBudget}
            style={customInputStyles.input}
            onChangeText={handleBudgetChange}
          />

          <TouchableOpacity style={customInputStyles.button} onPress={createBudget}>
            <Text style={customInputStyles.buttonText} >Create</Text>
          </TouchableOpacity>
      </View>
      </>
      
  );
}
const customInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: lightColors.secondary,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});