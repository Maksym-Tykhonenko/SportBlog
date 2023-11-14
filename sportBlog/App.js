import React, { useState , useRef, useEffect} from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, Animated } from 'react-native';

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
    <Tab.Navigator initialRouteName='SportRouts' screenOptions={{
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
  const rout = useRoute(true);

  /////////////////////////////////////
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
  const ChangeInView = props => {
        // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;
    
        const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0 to 1
        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 6000,
                useNativeDriver: true,
            }).start();
        }, []);

        const appearingAnim = useRef(new Animated.Value(0)).current;// Initial value for opacity: 1 to 0
        useEffect(() => {
            Animated.timing(appearingAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                setLoaderIsLoaded(true)
            }, 7000);

        }, []);

        return (
            <View style={{ position: 'relative', flex:1 }}>
                <Animated.Image
                    source={require('./acets/loader1.jpg')}// Special animatable View
                    style={{
                        ...props.style,
                        opacity: fadeAnim,
                        //width: 'auto',
                        height: '100%'  // Bind opacity to animated value
                    }} />
                <Animated.Image
                    source={require('./acets/loader2.jpg')}// Special animatable View
                    style={{
                        ...props.style,
                        opacity: appearingAnim,
                        //width: '100%',
                        height: '100%',
                        position: 'absolute'// Bind opacity to animated value
                    }} />
            </View>
    
        );
    };
  /////////////////////////////////////
  return (

    <NavigationContainer>

      {!loaderIsLoaded ? (
           <ChangeInView
                    style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: 'powderblue',
                    }}>
       
                </ChangeInView>
      ): (
          rout
      )}
      
    </NavigationContainer>
    
  )
};


export default App;


