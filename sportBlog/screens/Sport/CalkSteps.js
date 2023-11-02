import React, { useState } from 'react';
import {TouchableOpacity, Switch, View, Text, TextInput, Button } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';

const CalkSteps = ({ navigation }) => {

    const man = 0.72;
    const woman = 0.61;
    
    const [isEnabled, setIsEnabled] = useState(false);
    console.log(isEnabled);
    const [step, setStep] = useState('');
    //console.log(step);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (isEnabled) {
            let result = (parseInt(step) * woman).toFixed(2);
            return <Text>{result}</Text>;
        }
        else {
            let result = parseInt(step) * man;
            return <Text>{result}</Text>
        }
    };

    return (
        <View style={{ flex: 1, marginTop: 50, marginHorizontal: 20 ,position:'relative'}}>

            
            <View>
                <Text>Виберіть стать:</Text>
                <Switch
                    style={{width: 100}}
                    trackColor={{ false: '#81b0ff', true: '#767577' }}
                    thumbColor={!isEnabled ? '#f4f3f4' : '#f5dd4b'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                {isEnabled ? (
                    <Text style={{ fontWeight: 'bold' }}>Жінка</Text>
                ) : (
                    <Text style={{ fontWeight: 'bold' }}>Чоловік</Text>
                )}
            </View>
           
            <View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Кількісь кроків</Text>
                <TextInput
                    style={{ width: 100, height: 40, borderWidth: 1, borderRadius: 10, }}
                    value={step}
                    onChangeText={setStep}
                    keyboardType="numeric"
                />
            </View>

            {step === '' ? (
            <Text></Text>
            ): (
              <View style={{marginTop: 20}}>
                <Text>Отриманий результат:</Text>
                <Text style={{fontSize: 30, color: 'green'}}>{calculation()} metr's</Text>
            </View>  
            )}
            
           
            <TouchableOpacity
                style={{position: 'absolute',bottom: 10, right: 10,  }}
                onPress={()=>navigation.navigate('SportHome')}
            >
                <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity>
            
        </View>
    );
};

export default CalkSteps
