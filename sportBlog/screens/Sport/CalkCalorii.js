import React,{useState,useEffect} from "react";
import {TextInput,Switch, View, Text ,TouchableOpacity, ImageBackground,StyleSheet} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CalkCalorii = ({navigation, name , rollUp}) => {
    
    //чол 65кал 1000кроків
    //жін 52кал 1000кроків
    const man = 0.065;
    const woman = 0.052;

    const [isEnabled, setIsEnabled] = useState(false);
    const [step, setStep] = useState('');
    const [calkResult, setCalkResult] = useState('');

    useEffect(() => {
        calculation()
    }, [calkResult, step])

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (isEnabled) {
            let result = (step * woman).toFixed(2);
            setCalkResult(result);
        }
        else { 
            let result = (step * man).toFixed(2);
            setCalkResult(result);
        }
    }

    return (
        <View style={{ flex: 1, marginTop: 20,marginBottom: 30, position: 'relative', backgroundColor: '#000', borderColor: '#fff', borderWidth: 2, borderRadius: 10, padding: 10 }}>
           
            {isEnabled ? (
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{name}</Text>
                </View>
            ) : (
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>Convert steps taken to calories</Text>
                </View>
            )}

            <View style={{ flex: 1 }}>

                <View>
                    {isEnabled ? (
                        <Text style={{ marginBottom: 15, fontSize: 25, color: '#fff' }}>Choose gender :</Text>
                    ) : (
                        <Text style={{ marginBottom: 15, fontSize: 25, color: '#fff' }}>Choose gender :</Text>
                    )}
                            
                    <Switch
                        style={{ width: 100, borderWidth: 1, borderColor: '#fff', borderRadius: 15, width: 52 }}
                        trackColor={{ false: '#81b0ff', true: '#767577' }}
                        thumbColor={'#f5dd4b'}
                        //ios_backgroundColor="#3e3e3e" !isEnabled ? '#f4f3f4' :
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    {isEnabled ? (
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Woman <AntDesign name='woman' style={{ color: 'red', fontSize: 30 }} /></Text>
                    ) : (
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Man <AntDesign name='man' style={{ color: '#6a5acd', fontSize: 30 }} /></Text>
                    )}
                    
                </View>

                <View>
                    {isEnabled ? (
                        <Text style={{ color: '#fff', fontSize: 25, marginTop: 20, marginBottom: 10 }}>Steps :</Text>
                    ) : (
                        <Text style={{ color: '#fff', fontSize: 25, marginTop: 20, marginBottom: 10 }}>Steps :</Text>
                    )}
                    
                    <TextInput
                        style={{
                            width: 100, height: 40, borderWidth: 1, borderRadius: 10,
                            borderColor: isEnabled ? '#fff' : '#fff',
                            color: isEnabled ? '#fff' : '#fff',
                            fontSize: 25
                        }}
                        value={step}
                        onChangeText={setStep}
                        keyboardType="numeric"
                    />
                </View>


                {step === '' ? (
                    <View></View>
                ) : (
                    <View style={{ marginTop: 20 }}>
                        {isEnabled ? (
                            <Text style={{ color: '#fff', fontSize: 25, }}>Result:</Text>
                        ) : (
                            <Text style={{ color: '#fff', fontSize: 25, }}>Result:</Text>
                        )}
                        <Text style={{ fontSize: 40, color: 'green' }}>{calkResult} kkal</Text>
                    
                        <TouchableOpacity
                            onPress={() => {}}
                            style={{  alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 25, width: 130, height: 40 }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>SAVE</Text>
                        </TouchableOpacity>
                        
                    </View>
                )}

                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={() => rollUp()}
                >
                    <AntDesign name='arrowup' style={{ color: '#fff', fontSize: 25 , marginLeft: 8}} />
                </TouchableOpacity>
            </View>
                 
            
        </View>
    );
};

export default CalkCalorii;

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 50,position:'relative'
    },
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
})