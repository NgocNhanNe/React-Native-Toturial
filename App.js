import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './screen/Login';
import Register from './screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack  = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
 
  // // return <LogIn />;
  // return <Register/>;
}

