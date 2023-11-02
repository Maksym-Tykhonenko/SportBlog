import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SportHome from "../screens/Sport/SportHome";
import CalkSteps from "../screens/Sport/CalkSteps";
import CalkCalorii from "../screens/Sport/CalkCalorii";
import CalkCaloriiOnSteps from "../screens/Sport/CalkCaloriiOnSteps";


const SportRouts = () => {
    return (
       <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='SportHome' component={SportHome} />
            <Stack.Screen options={{ headerShown: false }} name='CalkSteps' component={CalkSteps} />
            <Stack.Screen options={{ headerShown: false }} name='CalkCalorii' component={CalkCalorii} />
            <Stack.Screen options={{ headerShown: false }} name='CalkCaloriiOnSteps' component={CalkCaloriiOnSteps} />
        
        </Stack.Navigator>
    )
};

export default SportRouts;