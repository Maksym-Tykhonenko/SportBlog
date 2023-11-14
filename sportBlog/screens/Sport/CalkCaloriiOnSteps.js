import React,{useState,useEffect} from "react";
import {TextInput,Switch, View, Text ,TouchableOpacity, ImageBackground,StyleSheet, KeyboardAvoidingView,Platform} from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';

import  { Calendar ,  LocaleConfig }  from  'react-native-calendars' ;

import { uid } from 'uid';

const CalkCaloriiOnSteps = ({ name , rollUp, handleAddInfo}) => {

    const moderateEffort = 0.14;
    const vigorousEffort = 0.0665;

    const [isEnabled, setIsEnabled] = useState(false);
    const [massa, setMassa] = useState('');
    const [time, setTime] = useState('');
    const [calkResult, setCalkResult] = useState('');
    //console.log('calkResult==>', calkResult);
    const [selectedData, setSelectedData] = useState('');

    useEffect(() => {
        calculation()
    }, [calkResult, massa, time])

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const calculation = () => {
        if (!isEnabled) {
            let result = (moderateEffort * massa * time).toFixed(2);
            setCalkResult(result)
        }
        else {
            let result = (vigorousEffort * massa * time).toFixed(2);
            setCalkResult(result)
        }
    };

    const handleSabmit = () => {
        const newInfo = {
            id: uid(),
            info: `I did push-ups for ${time} minute and burned ${calkResult} calories`,
            data: selectedData,
        };
        handleAddInfo(newInfo);

        setTime('');
        setMassa('');
    };

    return (
        <View style={{ flex: 1, marginTop: 20, position: 'relative', backgroundColor: '#4216b3', borderColor: '#fff', borderWidth: 2, borderRadius: 10, padding: 10 }}>
            
            <KeyboardAvoidingView  
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{name}</Text>
                </View>

                <View style={{ flex: 1 }}>

            
                    <View>

                        {isEnabled ? (
                            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Choose an effort:</Text>
                        ) : (
                            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10, }}>Choose an effort:</Text>
                        )}
                    
                
                    
                        <Switch
                            style={{ width: 100, borderWidth: 1, borderColor: '#fff', borderRadius: 15, width: 52 }}
                            trackColor={{ false: '#81b0ff', true: '#767577' }}
                            thumbColor={'#f5dd4b'}
                            //ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        {isEnabled ? (
                            <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 10, fontSize: 18 }}>moderate Effort</Text>
                        ) : (
                            <Text style={{ color: '#fff', marginTop: 10, fontSize: 18 }}>vigorous Effort</Text>
                        )}
                    </View>

                    {/**Calendar */}
                    <Calendar
                        onDayPress={day => {
                            setSelectedData(day.dateString);
                        }}
                        markedDates={{
                            [selectedData]: { selectedData: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
                    />

                    {isEnabled ? (
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Weight :</Text>
                            <TextInput
                                style={{ color: '#fff', width: 100, borderColor: '#fff', height: 40, borderWidth: 1, fontSize: 18, fontWeight: 'bold', borderRadius: 10, }}
                                value={massa}
                                onChangeText={setMassa}
                                keyboardType="numeric"
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20, marginBottom: 10 }}>Weight :</Text>
                            <TextInput
                                style={{ color: '#fff', width: 100, borderColor: '#fff', height: 40, borderWidth: 1, fontSize: 18, borderRadius: 10, }}
                                value={massa}
                                onChangeText={setMassa}
                                keyboardType="numeric"
                            />
                        </View>
                    )}
                

                    {isEnabled ? (
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Time :</Text>
                            <TextInput
                                style={{ color: '#fff', width: 100, height: 40, fontSize: 18, borderWidth: 1, borderColor: '#fff', borderRadius: 10, fontWeight: 'bold' }}
                                value={time}
                                onChangeText={setTime}
                                keyboardType="numeric"
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20, marginBottom: 10 }}>Time :</Text>
                            <TextInput
                                style={{ color: '#fff', width: 100, height: 40, fontSize: 18, borderColor: '#fff', borderWidth: 1, borderRadius: 10, }}
                                value={time}
                                onChangeText={setTime}
                                keyboardType="numeric"
                            />
                        </View>
                    )}
                

                    {massa === '' || time === '' ? (
                        <View></View>
                    ) : (
                        <View style={{ marginTop: 20 }}>
                            {isEnabled ? (
                                <Text style={{ color: '#fff', fontSize: 20, marginBottom: 5, fontWeight: 'bold' }}>You burned : </Text>
                            ) : (
                                <Text style={{ color: '#fff', fontSize: 20, marginBottom: 5 }}>You burned : </Text>
                            )}
                        
                            <Text style={{ fontSize: 40, color: 'green' }}>{calkResult} kkal</Text>

                            <TouchableOpacity
                                onPress={handleSabmit}
                                style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 25, width: 130, height: 40 }}
                            >
                                <Text style={{ color: '#fff', fontSize: 20 }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    )}
            

                </View>

                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={() => rollUp()}
                >
                    <AntDesign name='arrowup' style={{ color: '#fff', fontSize: 25, marginLeft: 8 }} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default CalkCaloriiOnSteps;

const styles = StyleSheet.create({
   
    bgr: {
         flex: 1,
        resizeMode: "cover",
    },
})