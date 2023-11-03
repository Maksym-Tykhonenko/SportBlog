import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';


const ProfilHome = ({ navigation, route }) => {
    
    //const {  steps } = route.params;
    //console.log('steps==>', route.params.name);

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 30, position: 'relative' }}>

            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Profil Home </Text>

            
        </View>
    );
};

export default ProfilHome;