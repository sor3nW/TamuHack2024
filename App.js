import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './firebase';
import {StyleSheet ,Button, View, Text, TextInput , FlatList, TouchableOpacity, Image, Alert,Modal, ScrollView, Keyboard, StatusBar} from 'react-native';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation , PaperProvider, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightColors} from './lightMode.json';
import 'firebase/firestore';
import WriteDataComponent from './components/writeDataComponent.js';
import BudgetCard from './components/budgetCard.js';
import AboutScreen from './About.js';
import Goals from './Goals.js';
import SettingsScreen from './Settings.js';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token.data;
}
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
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 50,backgroundColor: lightTheme.lightColors.background}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Your Budgets</Text>
        <WriteDataComponent/>
        <BudgetCard/>
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Title: {notification && notification.request.content.title} </Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
          <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
        <Button
          title="Press to Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken);
            token = await Notifications.getExpoPushTokenAsync({
              projectId: Constants.expoConfig.extra.eas.projectId,
            });
          }}
        />
      </View>
    </ScrollView>

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