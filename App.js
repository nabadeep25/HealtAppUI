

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
const Stack=createNativeStackNavigator();


const App=() => {


  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='login'>
       <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
       <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false}} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
   
  
   alignItems:'center',

  }


});

export default App;
