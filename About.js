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
            <View style = {styles.View1}>
                <Image source={require('./assets/Images/Nathan.jpg')} style={styles.Nathan} /> 
                <Text style = {styles.Text1}>Write Stuff About Nathan</Text>
            </View>
            <View style={styles.View2}>
                <Image source={require('./assets/Images/Jib.jpg')}  style={styles.Jib} />
                </View>
                <View style = {styles.View3}>
                <Image source={require('./assets/Images/Soren.jpg')} style={styles.Soren} />
                </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
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
    marginTop: 125,
  },
  Jib: {
    width: 100,
    height: 100,
    borderRadius: 200, 
    marginTop: 125,
  }, 
  Soren: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginTop: 125,
  },
  View1: {
    backgroundColor: 'lightgrey',
    height: 350,
    borderWidth: 3
  },
  View2: {
    backgroundColor: 'white',
    height: 350,
    borderWidth: 3
  },
  View3: {
  backgroundColor: 'lightgrey',
    height: 350,
    borderWidth: 3
  },
  Text1: {


  },
}
);
export default AboutScreen;