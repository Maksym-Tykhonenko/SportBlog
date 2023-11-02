import React from "react";
import { View,ImageBackground,StyleSheet, Text,TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SportHome = ({navigation}) => {
    return (
        <View style={ styles.container}>
            
               <ImageBackground
                source={require('../../acets/bgr_sport.jpeg')}
                style={styles.bgr}
            >
                <View style={styles.cotetCoteier}>
                 <TouchableOpacity
                onPress={()=> navigation.navigate('CalkSteps') }
                style={styles.bt}>
                <Text style={{color:'#fff', fontWeight: 'bold'}}>steps calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.navigate('CalkCalorii') }
                style={styles.bt}>
                <Text style={{color:'#fff', fontWeight: 'bold'}}>calorie calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.navigate('CalkCaloriiOnSteps') }
               style={styles.bt}>
                <Text style={{color:'#fff', fontWeight: 'bold'}}>step-by-step calorie burn calculator</Text>
                </TouchableOpacity>    
</View>
            
           
                    </ImageBackground>
        </View>
    )
};

export default SportHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'skyblue',
        position: 'relative',
        
    },
    bgr: {
        flex: 1,
        resizeMode: "cover",
    },
    cotetCoteier: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bt: {
        backgroundColor: '#000',
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 15,
    }
});
