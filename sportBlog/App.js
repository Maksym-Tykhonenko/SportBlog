import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import SportRouts from './routs/SportRouts';
import HorseRouts from './routs/HorseRouts';
import CardsRouts from './routs/CardsRout';
import ProfilRouts from './routs/ProfilRout';
import RegScreen from './screens/Reg/RegScree';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function useRoute(isAuth) {

  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Reg" component={RegScreen} />
      </Stack.Navigator>
    );
     
  } return (
    <Tab.Navigator initialRouteName='HorseRouts' screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }} >
      
      <Tab.Screen name="SportRouts" component={SportRouts} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <MaterialIcons name="sports-gymnastics" style={{ color: focused ? '#00D9FF' : 'grey', fontSize: 35 }} />)
        }
      }} />
      <Tab.Screen name="HorseRouts" component={HorseRouts} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <FontAwesome5 name="horse-head" style={{ color: focused ? '#00D9FF' : 'grey', fontSize: 35 }} />)
        }
      }} />
      <Tab.Screen name="CardsRouts" component={CardsRouts} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <MaterialCommunityIcons name="cards" style={{ color: focused ? '#00D9FF' : 'grey', fontSize: 35 }} />)
        }
      }} />

    </Tab.Navigator>
  );
};

const App = () => {

  const rout = useRoute(true)

  return (

    <NavigationContainer>

      {rout }
      
    </NavigationContainer>
    
  )
};


export default App;


