import React from 'react';
import './firebase';
import {StyleSheet ,Button, View, Text, TextInput , FlatList, TouchableOpacity, Image, Alert,Modal, ScrollView, Keyboard, StatusBar} from 'react-native';
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
import firebase from 'firebase/app';
import 'firebase/firestore';
import WriteDataComponent from './components/writeDataComponent.js';
import NumInputForm from './components/numInputForm.js';
import BudgetCard from './components/budgetCard.js';
import AboutScreen from './About.js';
import Goals from './Goals.js';
import SettingsScreen from './Settings.js';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: lightColors.primary,
    accent: "black",
    background: lightColors.background,
    
  },
}

function HomeScreen() {
  
  const lightTheme = {lightColors};

  return (
    <View style={{flex: 1, marginTop: 50,backgroundColor: lightTheme.lightColors.background}}>
      <WriteDataComponent/>
    </View>
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





const Tab = createBottomTabNavigator();

export default function App() {
  const lightTheme = {lightColors};
  return (
    <PaperProvider theme={customTheme}>
    <NavigationContainer >
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          
          barStyle={{ backgroundColor: lightTheme.lightColors.primary }}
          activeColor={lightTheme.lightColors.primary}
          inactiveColor={lightTheme.lightColors.primary}
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={lightTheme.lightColors.primary} />;
          },
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarLabel: 'Goals',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cash" size={size} color={lightTheme.lightColors.primary} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="information-outline" size={size} color={lightTheme.lightColors.primary} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={lightTheme.lightColors.primary} />;
          },
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}