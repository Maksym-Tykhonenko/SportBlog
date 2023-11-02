import React,{useState} from "react";
import {TextInput,Switch, View, Text ,TouchableOpacity, ImageBackground,StyleSheet} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const CalkCalorii = ({ navigation }) => {
    //чол 65кал 1000кроків
    //жін 52кал 1000кроків
    const man = 0.065;
    const woman = 0.052;

    const [isEnabled, setIsEnabled] = useState(false);
    const [step, setStep] = useState('');

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (isEnabled) {
            let result = step * woman;
            return result;
        }
        else { 
            let result = step * man;
            return result;
        }
    }

    return (
        <View style={styles.container}>
           
            <View>
                <Text>Виберіть стать:</Text>
                <Switch
                    style={{ width: 100 }}
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
            <View></View>
            ): (
               <View style={{marginTop: 20}}>
                <Text style={{fontSize: 20}}>Ви спалили: </Text>
                <Text style={{fontSize: 40, color: 'green'}}>{calculation()} kkal</Text>
            </View> 
            )}
            
                
                
            <TouchableOpacity
                style={{ position: 'absolute', bottom: 10, right: 10 }}
                onPress={() => navigation.navigate('SportHome')}
            >
                <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity>
        </View>
    );
};

export default CalkCalorii;

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 50, marginHorizontal: 20 ,position:'relative'
    },
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
})