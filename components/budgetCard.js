import { db } from '../firebase.js';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';  
import { getDatabase, ref, set , update, onValue, doc} from "firebase/database";
import {lightColors} from '../lightMode.json';
import firebase from 'firebase/app';
import 'firebase/database';

const lightTheme = {lightColors};

const BudgetCard = () =>{
  
  const [userData, setUserData] = useState(null);

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
                <Text style={{ fontSize: '22px', width: 'auto'}}> Usage: {item.budgetUsed}/{item.budget}</Text>
              
              </View>
              <View style={styles.column1}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>edit</Text>
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
    height: 125,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  column2: {
    flex: 2, // Takes up 2/3 of the available space
    backgroundColor: 'lightblue', // Adjust styles as needed
    height: 100,
  },
  column1: {
    flex: 1, // Takes up 1/3 of the available space
    backgroundColor: 'lightgreen', // Adjust styles as needed
    height: 100
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