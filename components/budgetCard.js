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
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id:key,
        ...data[key]
      }));
      console.log(newPosts);
      setUserData(newPosts)
    });
  })
  return (
    <View style={styles.container}>
      
      {
        userData.map((item, index) => {
          return( 
            <View key={index}>
              <Text>{item.budgetName}</Text>
              <Text>{item.budget}</Text>
            </View>
          )
        })
      }
      
    </View>
    
  );
}

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