import * as React from 'react'; 
import {StyleSheet ,Button, View, Text, TextInput , FlatList,TouchableOpacity,Image,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import {lightColors} from './lightMode.json';
import {darkColors} from './darkMode.json';
import {useState} from 'react';
import { CommonActions } from '@react-navigation/native';
import {BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function HomeScreen({ navigation}) {
  const lightTheme = {lightColors}
  const darkTheme = {darkColors}
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: lightTheme.lightColors.background}}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              itemId: 1,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          title="Go to About"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('About', {
              itemId: 2,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button title="Nathan's Practicing Here, Will delete later"
        onPress={() => {
          navigation.navigate('NathanPractice', { 
            itemId: 3,
            otherParam: 'anything you want here'
          });
        }}
        >
          
        </Button>
        
      </View>
      
    </SafeAreaProvider>
  );
}

function DetailsScreen() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    </SafeAreaProvider>
  );
}

function AboutScreen() {
  return (
      <SafeAreaProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{}}> Here is the about screen for Credit Confidence! </Text>
        </View>
      </SafeAreaProvider>
  );
}



function NathanPractice() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  return (
    <SafeAreaProvider>
      
<View>
  <Text> {count} </Text>
  <Button onPress={ () => setCount(count + 1)
    
  }></Button>
</View>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="NathanPractice" component={NathanPractice} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;