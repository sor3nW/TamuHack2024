import { db } from '../firebase.js';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update, onValue, doc} from "firebase/database";
import {lightColors} from '../lightMode.json';
import { getDatabase } from "firebase/database";

const lightTheme = {lightColors};
function BudgetCard(){
  const database = getDatabase();
  const [budget, setBudget] = useState('');
  
  
  const budgetItem = doc(db, 'users/budgets');
  onValue(budgetItem, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
    console.log(data);
  });
  

  return (
    <View >
      {budget.map((budget, index) => (
        <View key={index} style={customInputStyles.container}>
          <Text>{budget.budgetName} {budget.budgetUsed}/{budget.budget}</Text>
          
        </View>
      
      ))}
    </View>
    


  );
};

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
export default BudgetCard;