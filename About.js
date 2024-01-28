import React from 'react';
import {StyleSheet ,Button, View, Text, TextInput , FlatList, TouchableOpacity, Image, Modal, ScrollView} from 'react-native';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation , PaperProvider, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {lightColors} from './lightMode.json';
import {darkColors} from './darkMode.json';
import {useState} from 'react';
import {images} from './Constants.json';
import {SettingsScreen} from './Settings.js';

function AboutScreen() {
  return (
      <SafeAreaProvider>
        <ScrollView>
        <View>
          <View style = {styles.top}></View>
            <View style = {styles.View1}>
            <Text style = {styles.AboutN}>Nathan</Text> 
                <Image source={require('./assets/Images/Nathan.jpg')} style={styles.Nathan} /> 
                <Text style = {styles.Text1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                
            </View>
            <View style = {styles.View2}>
            <Text style = {styles.AboutN}>Jibril</Text> 
                <Image source={require('./assets/Images/Jib.jpg')} style={styles.Nathan} /> 
                <Text style = {styles.Text2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                
            </View>
                        <View style = {styles.View3}>
            <Text style = {styles.AboutN}>Soren</Text> 
                <Image source={require('./assets/Images/Soren.jpg')} style={styles.Nathan} /> 
                <Text style = {styles.Text3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  top: {
    backgroundColor: 'black',
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Profile: {
   marginTop: 120,
   marginLeft: 20,
   color: 'blue',
   fontSize: '30',
   width: 200,
   
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  Nathan: {
    width: 100,
    height: 100,
    borderRadius: 200, 
    marginTop: 0,
    borderWidth:3,
    marginLeft: 145, 
  },
  Jib: {
    width: 100,
    height: 100,
    borderRadius: 200, 
    marginTop: 50,
    borderWidth: 3,
    

  }, 
  Soren: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginTop: 125,
  },
  View1: {
    backgroundColor: 'darkgrey',
    height: 350,
    borderWidth: 3
  },
  View2: {
    backgroundColor: 'white',
    height: 350,
    borderWidth: 3
  },
  View3: {
  backgroundColor: 'darkgrey',
    height: 350,
    borderWidth: 3
  },
  Text1: {
  fontSize: 15,
  marginBottom: -100,
 textAlign: 'center', 

  },
  Text2: {
    fontSize: 15,
    marginBottom: -100,
   textAlign: 'center', 
  
    },
    Text3: {
      fontSize: 15,
      marginBottom: -100,
     textAlign: 'center', 
    
      },
  AboutN: {
 
    fontSize: 30,
    fontWeight: 'bold',
   textAlign: 'center', 
  }

}
);
export default AboutScreen;