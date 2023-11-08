import React from "react";
import {StyleSheet,ImageBackground, View, Text,TouchableOpacity, SafeAreaView } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HorsesHome = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                source={require('../../acets/bgr_horse.png')}
                style={styles.bgr}
            >
                <View style={{ flex:1,alignItems: 'center',justifyContent: 'center'}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('HorseNews')}
                    style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginBottom: 30, borderWidth: 2, borderRadius: 25, borderColor: '#fff', paddingHorizontal: 10, paddingVertical: 15, }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>NEWS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('HorsePhoto')}
                    style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderWidth: 2, borderColor: '#fff', borderRadius: 25, paddingHorizontal: 10, paddingVertical: 15, }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>PHOTO</Text>
                </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </SafeAreaView>
    );
};

export default HorsesHome;

const styles = StyleSheet.create({
    container: {flex: 1,
        //backgroundColor: 'skyblue',
        position: 'relative',
    },
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
})