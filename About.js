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

export default function AboutScreen() {
    return (
        <SafeAreaProvider>
          <ScrollView style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Text style={{}}> Here is the about screen for Credit Confidence!  </Text>
            <Image source={require('./assets/Images/Nathan.jpg')} resizeMode=" center" style={{width: 200, height: 200}} />
            <Image source={require('./assets/Images/Jib.jpg')} resizeMode=" center" style={{width: 200, height: 200}} />
            <Image source={require('./assets/Images/Soren.jpg')} resizeMode=" center" style={{width: 200, height: 200}} />

          </ScrollView>
        </SafeAreaProvider>
    );
  }