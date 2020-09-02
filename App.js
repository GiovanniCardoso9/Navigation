import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Perfil from './src/pages/Perfil'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function tabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={tabs}
        options = {{
          title: 'Bem-Vindo'
        }} />
       
        <Stack.Screen name="Perfil" component={Perfil}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}