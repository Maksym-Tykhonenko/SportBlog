import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HorsesHome from "../screens/Horses/HorsesHome";
import HorseNews from "../screens/Horses/HorseNews";
import HorsePhoto from "../screens/Horses/HorsePhoto";

const HorseRouts = () => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='HorsesHome' component={HorsesHome} />
            <Stack.Screen options={{ headerShown: false }} name='HorseNews' component={HorseNews} />
            <Stack.Screen options={{ headerShown: false }} name='HorsePhoto' component={HorsePhoto} />
            
           
        </Stack.Navigator>
    );
};

export default HorseRouts;