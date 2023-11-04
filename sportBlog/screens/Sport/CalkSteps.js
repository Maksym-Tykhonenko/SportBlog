import React, { useState,useEffect } from 'react';
import {TouchableOpacity, Switch, View, Text, TextInput, Button } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { uid } from 'uid';

const CalkSteps = ({navigation, name , rollUp, handleAddInfo}) => {

    //const { name } = route.params;
    //console.log('name==>', )

    const man = 0.72;
    const woman = 0.61;
    
    const [isEnabled, setIsEnabled] = useState(false);
    //console.log(isEnabled);
    const [step, setStep] = useState('');
    const [calkResult, setCalkResult] = useState('');
    //console.log('calkResult==>',calkResult);

    useEffect(() => {
        calculation()
    }, [calkResult, step])

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (isEnabled) {
            let result = (parseInt(step) * woman).toFixed(2);
            setCalkResult(result);
        }
        else {
            let result = (parseInt(step) * man).toFixed(2);
            setCalkResult(result);
        }
    };

    const handleSabmit = () => {
        const newInfo = {
            id: uid(),
            info: `I took ${step} steps and after walking ${calkResult} m`,
            
        };
        handleAddInfo(newInfo);
        setStep('');
    };

    return (
        <View style={{ flex: 1, marginTop: 20,marginBottom:20,  position: 'relative' , backgroundColor: '#000', borderColor: '#fff', borderWidth: 2, borderRadius: 10, padding:10}}>

            {isEnabled ? (
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{name}</Text>
                </View>
            ) : (
                <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{name }</Text>
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
                        style={{ width: 100 ,borderWidth: 1, borderColor: '#fff',borderRadius: 15,width: 52}}
                        trackColor={{ false: '#81b0ff', true: '#767577' }}
                        thumbColor={'#f5dd4b'}
                        //ios_backgroundColor="#3e3e3e" !isEnabled ? '#f4f3f4' :
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    {isEnabled ? (
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Woman <AntDesign name='woman' style={{ color: 'red', fontSize: 30 }} /></Text>
                    ) : (
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Man <AntDesign name='man' style={{ color: '#6a5acd', fontSize: 30 }} /></Text>
                    )}
                </View>
           
                <View>
                    <Text style={{ color: '#fff', fontSize: 25, }}>Caledar</Text>
                </View>

                <View>
                    {isEnabled ? (
                        <Text style={{ color: '#fff', fontSize: 25, marginTop: 20, marginBottom: 10 }}>Steps :</Text>
                    ) : (
                        <Text style={{ color: '#fff', fontSize: 25, marginTop: 20, marginBottom: 10 }}>Steps :</Text>
                    )}
                    
                    <TextInput
                        style={{
                            paddingLeft: 10,
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
                    <Text></Text>
                ) : (
                    <View style={{ marginTop: 20 }}>
                        {isEnabled ? (
                            <Text style={{ color: '#fff', fontSize: 25, }}>Result:</Text>
                        ) : (
                            <Text style={{ color: '#fff', fontSize: 25, }}>Result:</Text>
                        )}
                        
                        <Text style={{ fontSize: 30, color: 'green', marginTop: 10 }}>{calkResult} metr's</Text>
                            
                        <TouchableOpacity
                            onPress={handleSabmit}
                            style={{marginBottom: 20,alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor:'#fff', borderRadius: 25,width: 130,height: 40}}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>SAVE</Text>
                        </TouchableOpacity>

                       
                    </View>
                )}

                <TouchableOpacity
                    style={{}}
                    onPress={() => rollUp()}
                >
                    <AntDesign name='arrowup' style={{ color: '#fff', fontSize: 25 , marginLeft: 8}} />
                </TouchableOpacity>
                
                
            </View>
            {/** alignItems: 'center',justifyContent: 'center',borderWidth: 1,borderColor:'#fff', borderRadius: 25,width: 130,height: 40
            <TouchableOpacity
                style={{ position: 'absolute', bottom: 10, right: 10, }}
                onPress={() => navigation.navigate('SportHome')}
            >
                <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity> */}
            
        </View>
    );
};

export default CalkSteps
