import React from 'react';
import {StyleSheet ,Button, View, Text, TextInput , FlatList,TouchableOpacity,Image,Modal} from 'react-native';
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
  const [budget, setBudget] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: lightTheme.lightColors.background}}>
      <Text variant="headlineMedium">Home!</Text>
      <TextInput label="budget" value={budget} onChangeText={setBudget} />

    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );  
}
function AboutScreen() {
  return (
      <SafeAreaProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{}}> Here is the about screen for Credit Confidence!  </Text>
          <Image source={require('./assets/Turt.png')}></Image>

        </View>
      </SafeAreaProvider>
  );
}


function Goals() {
  const [text, setText] = useState('');
  
  return (
    <SafeAreaProvider>
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Ello </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


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

