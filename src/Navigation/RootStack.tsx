import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Camera from '../Screens/Camera/Camera';
import Employee from '../Screens/Employee/Employee';
import Login from '../Screens/Login/Login';
import CreateEmployee from '../Screens/CreateEmployee/CreateEmployee';


export  const RootStack = ()  => {
    const Stack = createStackNavigator();
  return (
   
    <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}  options={{ 
            headerShown: false 
          }}  />
      <Stack.Screen name="Employee" component={Employee}  options={{ 
            headerShown: false 
          }}  />
      <Stack.Screen name="Home" component={Home}  options={{ 
            headerShown: false 
          }}  />
      <Stack.Screen name="Camera" component={Camera}  options={{ 
            headerShown: false 
          }}  />
      <Stack.Screen name="CreateEmployee" component={CreateEmployee}  options={{ 
            headerShown: false 
          }}  />
      
    </Stack.Navigator>
 
  )
}