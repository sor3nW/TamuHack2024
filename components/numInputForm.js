import React from 'react';
import {StyleSheet ,Button, View, Text, TextInput , FlatList, TouchableOpacity, Image, Alert,Modal, ScrollView, Keyboard, StatusBar} from 'react-native';
import {lightColors} from '../lightMode.json';
import {useState} from 'react';

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
      backgroundColor: lightColors.background,
      borderRadius: 5,
    },
    button: {
      backgroundColor: lightColors.primary,
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });
  
const NumInputForm = () =>{
    const [budget, setBudget] = useState('0');
    const [tempBudget, setTempBudget] = useState('');
    const handleBudgetChange = (text) => {
      // Allow only numeric input
      const numericInput = text.replace(/[^0-9]/g, '');
      setTempBudget(numericInput);
    };
  
    const handleSaveBudget = () => {
      // You can use the 'budget' variable for further processing or state management
      setBudget(tempBudget);
      setTempBudget('');
      console.log('Budget:', budget);
  
      Keyboard.dismiss();
    };
    
    
    return (
        <>
        <Text variant="headlineMedium">Budget: ${budget}</Text>
        <View style={customInputStyles.container}>
          <TextInput
            keyboardType='numeric'
            placeholder="Enter budget"
            value={tempBudget}
            style={customInputStyles.input}
            onChangeText={handleBudgetChange}
            onSubmitEditing={handleSaveBudget}
          />
  
          <TouchableOpacity style={customInputStyles.button} onPress={handleSaveBudget}>
            <Text style={customInputStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
  
        </View>
        </>
        
    );
  }
export default NumInputForm;