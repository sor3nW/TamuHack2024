import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update} from "firebase/database";
import {lightColors} from '../lightMode.json';
import { db } from '../firebase.js';
const lightTheme = {lightColors};

export default function WriteDataComponent() {
  const [budget, setBudget] = useState('');
  const [tempBudget, setTempBudget] = useState('');
  const handleBudgetChange = (text) => {
    // Allow only numeric input
    const numericInput = text.replace(/[^0-9]/g, '');
    setTempBudget(numericInput);
    setBudget(numericInput);
  };

  const handleSaveBudget = () => {
    // You can use the 'budget' variable for further processing or state management
    setBudget(tempBudget);
    setTempBudget('');
    console.log('Budget:', budget);

    Keyboard.dismiss();
  };
  const [budgetName, setBudgetName] = useState('');

  function create(){
    // const newKey = push(child(ref(database), 'users')).key;
    update(ref(db, 'users/budgets/' + budgetName), {
      budgetName: budgetName,
      budget: budget,
      budgetUsed: 0
    }).then(() => {
      alert('data uploaded')
    })
    .catch((error) => {
      alert(error)
    });
  }
  
  return (
      <>
      <View style={customInputStyles.container}>
        
        
        
        
        <TextInput
            placeholder="Budget Name"
            value={budgetName}
            style={customInputStyles.input}
            onChangeText={(budgetName) => setBudgetName(budgetName)}
          />
          <TextInput
            keyboardType='numeric'
            placeholder="Enter budget"
            value={tempBudget}
            style={customInputStyles.input}
            onChangeText={handleBudgetChange}
          />

          <TouchableOpacity style={customInputStyles.button} onPress={create}>
            <Text style={customInputStyles.buttonText}>Submit</Text>
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