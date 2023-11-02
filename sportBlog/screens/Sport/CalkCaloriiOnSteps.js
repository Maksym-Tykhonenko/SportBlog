import React,{useState} from "react";
import {TextInput,Switch, View, Text ,TouchableOpacity, ImageBackground,StyleSheet} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const CalkCaloriiOnSteps = ({ navigation }) => {
    const moderateEffort = 0.14;
    const vigorousEffort = 0.0665;

    const [isEnabled, setIsEnabled] = useState(false);
    const [massa, setMassa] = useState('');
    const [time, setTime] = useState('');

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (!isEnabled) {
            let result = (moderateEffort * massa * time).toFixed(2);
            return result;
        }
        else { 
            let result = (vigorousEffort * massa * time).toFixed(2);
            return result;
        }
    }

    return (
        <View style={styles.container}>
            
            <View>
                <Text>Виберіть зусилля:</Text>
                <Switch
                    style={{ width: 100 }}
                    trackColor={{ false: '#81b0ff', true: '#767577' }}
                    thumbColor={!isEnabled ? '#f4f3f4' : '#f5dd4b'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                {isEnabled ? (
                    <Text style={{ fontWeight: 'bold' }}>moderate Effort</Text>
                ) : (
                    <Text style={{ fontWeight: 'bold' }}>vigorous Effort</Text>
                )}
            </View>

            <View>
              <Text style={{ fontSize: 20, marginTop: 20 }}>Вага:</Text>
                <TextInput
                    style={{ width: 100, height: 40, borderWidth: 1, borderRadius: 10, }}
                    value={massa}
                    onChangeText={setMassa}
                    keyboardType="numeric"
                />
            </View>  

            <View>
              <Text style={{ fontSize: 20, marginTop: 20 }}>Час:</Text>
                <TextInput
                    style={{ width: 100, height: 40, borderWidth: 1, borderRadius: 10, }}
                    value={time}
                    onChangeText={setTime}
                    keyboardType="numeric"
                />
            </View>  

            {massa === '' || time === '' ? (
                <View></View>
            ) : (
                    <View style={{marginTop: 20}}>
                <Text style={{fontSize: 20}}>Ви спалили: </Text>
                <Text style={{fontSize: 40 ,color: 'green'}}>{calculation() } kkal</Text>
            </View>
            )}
            


                 <TouchableOpacity
                    style={{ position: 'absolute',bottom: 10, right:10 }}
                    onPress={() => navigation.navigate('SportHome')}
                >
                    <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
                </TouchableOpacity>
        </View>
    )
};

export default CalkCaloriiOnSteps;

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 50, marginHorizontal: 20 ,position:'relative'
    },
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
})