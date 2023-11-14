import React, {useEffect, useRef } from 'react';
import {Animated, View, Text,Image } from 'react-native';


const FadeInView = props => {
    
    // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;
    


   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true,
        }).start();
    }, []);

    const appearingAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.timing(appearingAnim, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={{position: 'relative'}}>
            <Animated.Image
                source={require('../../acets/loader1.jpg')}// Special animatable View
                style={{
                    ...props.style,
                    opacity: fadeAnim,
                   width: 380,
                    height: '100%'  // Bind opacity to animated value
                }} />
            <Animated.Image
                source={require('../../acets/loader2.jpg')}// Special animatable View
                style={{
                    ...props.style,
                    opacity: appearingAnim,
                   width: 380,
                    height: '100%',
                    position: 'absolute'// Bind opacity to animated value
                }} />
        </View>
    
    );
};


const RegScreen = () => {

  return (
   <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
        }}>
       
      </FadeInView>
    </View>
  );

};

export default RegScreen;
