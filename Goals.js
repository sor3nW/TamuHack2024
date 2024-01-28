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
import {AboutScreen} from './About.js';

function Goals() {
    const [text, setText] = useState('');
    
    return (
      <SafeAreaProvider>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text > Ello </Text>
        </View>
      </SafeAreaProvider>
    );
  }
export default Goals;