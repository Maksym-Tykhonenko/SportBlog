import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProfilHome from "../screens/Profile/ProfileHome";


const Stack = createStackNavigator();

const ProfilRouts = () => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='ProfilHome' component={ProfilHome} />
        
        </Stack.Navigator>
    );
};
//options={{ title: 'Cards game list' }}
export default ProfilRouts;