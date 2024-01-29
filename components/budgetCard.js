import { db } from '../firebase.js';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update, onValue, doc, remove} from "firebase/database";
import {lightColors} from '../lightMode.json';
import firebase from 'firebase/app';
import 'firebase/database';

const lightTheme = {lightColors};

const BudgetCard = () => {
  const [budget, setBudget] = useState('0');
  const [tempBudget, setTempBudget] = useState('');
  const [budgetUsed, setBudgetUsed] = useState('');
  const [userData, setUserData] = useState(null);

  const handleUsedBudget = (id, text) => {
    const numericInput = text.replace(/[^0-9]/g, '');
    setBudgetUsed(numericInput);
    setUserData((prevData) => {
      const newData = prevData.map((item) =>
        item.id === id ? { ...item, budgetUsed: +numericInput || 0} : item
        
      );
      return newData;
    });
  };

  function Update(id, budgetName, budget, input){
    // const newKey = push(child(ref(database), 'users')).key;

    update(ref(db, 'users/budgets/' + budgetName), {
      budgetName: budgetName,
      budget: budget,
      budgetUsed: +input + (+userData.find((item) => item.id === id).budgetUsed)
    }).then(() => {
      alert('Budget Added')
    })
    .catch((error) => {
      alert(error)
    });
  }
  const deleteBudget = (id) => {
    remove(ref(db, `users/budgets/${id}`))
      .then(() => {
        // Remove the budget from the local state
        setUserData((prevData) => prevData.filter((item) => item.id !== id));
        alert('Budget Deleted');
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    const starCountRef = ref(db, 'users/budgets/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id:key,
        ...data[key]
      }));
      
      console.log(newPosts);
      setUserData(newPosts)
      
    });
  }, [])

  return (
    <View >
      
      {userData &&
        userData.map((item, index) => {
          return( 
            <View key={index} style={styles.container}>
              <View style={styles.column2}>
                <Text style={{ fontSize: "22px", width:"auto"}}>Budget Name: {item.budgetName} </Text>
                <Text style={{ fontSize: '22px', width: 'auto'}}> Usage: ${item.budgetUsed}/{item.budget}</Text>
              
              </View>
              <View style={styles.column1}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  
                  <TextInput
                    keyboardType='numeric'
                    placeholder="$ used"
                    style={styles.input}
                    onChangeText={(numbericInput) => handleUsedBudget(index, numbericInput)}
                  />
                  <TouchableOpacity style={styles.button} onPress={() => Update(item.id, item.budgetName, item.budget, budgetUsed)} >
                    <Text style={styles.buttonText}>Add</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => deleteBudget(item.id)}>delete</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          )
        })
      }
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: lightColors.secondary,
    height: 120,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  column2: {
    flex: 2, // Takes up 2/3 of the available space
    backgroundColor: "lightgreen", // Adjust styles as needed
    height: 90,
  },
  column1: {
    flex: 1, // Takes up 1/3 of the available space
    backgroundColor: "lightgreen", // Adjust styles as needed
    height: 90,
    justifyContent: 'center',
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