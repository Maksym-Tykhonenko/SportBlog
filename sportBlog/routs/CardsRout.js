import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import CartsHomeScreen from "../screens/Cards/CartsHomeScreen";
import CartDitailScreen from "../screens/Cards/CartDitailScreen";


const Stack = createStackNavigator();

const CardsRouts = () => {
    
    return (
        <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='CartsHomeScreen' component={CartsHomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name='CartDitailScreen' component={CartDitailScreen} />
        
        </Stack.Navigator>
    );
};
//options={{ title: 'Cards game list' }}
export default CardsRouts; 
{/** 

*/}