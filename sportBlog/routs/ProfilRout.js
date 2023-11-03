import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProfilHome from "../screens/Profile/ProfileHome";
import { Text, View } from "react-native";


const Stack = createStackNavigator();

const ProfilRouts = () => {
    return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <Text>ProfilHome</Text>
    </View>
      
    );
};
{/**  <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='ProfilHome' component={ProfilHome} />
        
        </Stack.Navigator>*/}
//options={{ title: 'Cards game list' }}
export default ProfilRouts;