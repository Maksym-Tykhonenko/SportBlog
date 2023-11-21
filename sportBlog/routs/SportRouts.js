{/** */ } import React, {useState, useEffect} from "react";
import { View, Text,TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SportHome from "../screens/Sport/SportHome";

import { LogLevel, OneSignal } from 'react-native-onesignal';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';



const SportRouts = () => {

 {/**    const [idfa, setIdfa] = useState(null);

    useEffect(() => {
        ReactNativeIdfaAaid.getAdvertisingInfo()
            .then((res) =>
                !res.isAdTrackingLimited ? setIdfa(res.id) : setIdfa(null),
            )
            .catch((err) => {
                console.log(err);
                return setIdfa(null);
            });
    }, []);

    useEffect(() => {
        if (idfa) {
            // Метод для запиту дозволів на push-сповіщення
            OneSignal.Notifications.requestPermission(true);
        }
    }, [idfa]);
    //

    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("dce89cfe-ba53-4956-8619-e5320af45988");

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
        console.log('OneSignal: notification clicked:', event);
    });

    //Add Data Tags
    OneSignal.User.addTag("key", "value");*/}


    return (
        <Stack.Navigator>
            
            <Stack.Screen options={{ headerShown: false }} name='SportHome' component={SportHome} />
            
        
        </Stack.Navigator>
    );
       
    
};


export default SportRouts;
