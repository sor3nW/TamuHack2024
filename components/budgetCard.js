import { db } from '../firebase.js';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update, onValue, doc} from "firebase/database";
import {lightColors} from '../lightMode.json';
import firebase from 'firebase/app';
import 'firebase/database';

const lightTheme = {lightColors};
function BudgetCard(){
  const database = getDatabase();
  const [budget, setBudget] = useState('');
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const databaseRef = firebase.database().ref('users');

    // Attach an event listener for value changes
    const onValueChange = (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    };

    databaseRef.on('value', onValueChange);

    // Clean up the event listener when the component unmounts
    return () => databaseRef.off('value', onValueChange);
  }, []); 
  

  return (
    <View style={styles.container}>
      {userData && userData.budgets && (
        Object.entries(userData.budgets).map(([budgetKey, budgetData]) => (
          <View key={budgetKey} style={styles.card}>
            <Text>{budgetData.budgetName}</Text>
            <Text>Budget: {budgetData.Budget}</Text>
          </View>
        ))
      )}
    </View>
    


  );
};

const styles = StyleSheet.create({
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