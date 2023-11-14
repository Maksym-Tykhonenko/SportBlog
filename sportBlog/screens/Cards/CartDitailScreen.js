import React, { useState } from "react";
import {Vibration,StyleSheet,ImageBackground, View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const CartDitailScreen = ({ navigation, route }) => {

    const { game } = route.params;
    console.log('game===>', game);
    const [gm, setGm] = useState(game)
    const { winningCombinations, howToWin, id, name, photo } = gm;
    console.log('photo===>', photo)

    const gaBack = () => {
        navigation.navigate("CartsHomeScreen")
        Vibration.vibrate();
    };

 
   
    
    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../acets/backgr.jpg')}
                style={styles.bgr}
            >
                <View style={styles.contentCoteier}>

                    <Text style={{ fontSize: 28, color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>{name}</Text>

                    
                    <ScrollView>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 5 }}>How To Win: </Text>
                            <Text style={{ fontSize: 15, color: '#fff' }}>{howToWin} </Text>
                       
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 5 }}>Winning Combinations:</Text>
                            <Text style={{ fontSize: 15, color: '#fff', marginBottom: 5 }}>{winningCombinations}</Text>
                            
                            {photo && (
                                <Image style={{ height: 280, width: 280, borderWidth: 1, borderRadius: 10, borderColor: '#fff' }}
                                    source={{ uri: photo }} />
                            )}
                             
                        </View>
                        
                    </ScrollView>
                </View>
            
                <TouchableOpacity
                    onPress={() => gaBack()}
                    style={{ position: 'absolute', bottom: 15, right: 20 }}>
                    <Ionicons name='arrow-undo-sharp' style={{ color: '#fff', fontSize: 25 }} />
                </TouchableOpacity>

                

            </ImageBackground>
        </View>
    );
};

export default CartDitailScreen;

const styles = StyleSheet.create({
    container: {flex: 1,
        //backgroundColor: 'skyblue',
        position: 'relative',
    },
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
    contentCoteier: {
        paddingHorizontal: 30,
        paddingTop:30
    }
})