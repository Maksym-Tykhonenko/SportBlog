import React,{useState} from "react";
import { View,ImageBackground,StyleSheet, Text,TouchableOpacity, Alert, Modal, TextInput, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import CalkSteps from "./CalkSteps";
import CalkCalorii from "./CalkCalorii";
import CalkCaloriiOnSteps from "./CalkCaloriiOnSteps";

const SportHome = ({ navigation }) => {
    const [firstBt, setFirstBt] = useState('Calculator of Steps Walked in Meters(m)');
    const [secedBt, setsecedBt] = useState('Convert steps taken to calories');
    const [firdtBt, setfirdtBt] = useState('Calculator of burned calories by push-ups');
///////////////////////////////////////////////////////////////
    const [showFirstBt, setShowFirstBt] = useState(true)
    const [showSecodBt, setShowSecodBt] = useState(true)
    const [showThordBt, setShowThordBt] = useState(true);

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [photo, setPhoto] = useState(null);
    const [b, setb] = useState();
    console.log('b==>', b)

    const showFirstCalk = (item) => {
        //Alert.alert('showFirstCalk')
        console.log(item)
        setShowFirstBt((prevSt) => {
            return !prevSt;
        });
        setb(item)
    };
    const showSecodCalk = () => {
        //Alert.alert('showFirstCalk')
        setShowSecodBt((prevSt) => {
            return !prevSt;
        });
    };
    const showThordCalk = () => {
        //Alert.alert('showFirstCalk')
        setShowThordBt((prevSt) => {
            return !prevSt;
        });
    };

    


    return (
        <View style={styles.container}>
            
            <ImageBackground
                source={require('../../acets/bgr_sport.jpeg')}
                style={styles.bgr}
            >
                <View style={styles.cotetCoteier}>
                    <ScrollView style={{ marginTop: 25 }}>

                        
                        {showFirstBt ? (
                            <TouchableOpacity
                                onPress={() => { showFirstCalk() }}
                                style={styles.bt}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{firstBt}</Text>
                            </TouchableOpacity>
                        ) : (
                            <CalkSteps name={firstBt} rollUp={showFirstCalk} />
                        )}

                        {showSecodBt ? (
                            <TouchableOpacity
                                onPress={() => showSecodCalk()}
                                style={styles.bt}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{secedBt}</Text>
                            </TouchableOpacity>
                        ) : (
                            <CalkCalorii name={secedBt} rollUp={showSecodCalk} />
                        )}

                        {showThordBt ? (
                            <TouchableOpacity
                                onPress={() => showThordCalk()}
                                style={styles.bt}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{firdtBt}</Text>
                            </TouchableOpacity>
                        ) : (
                            <CalkCaloriiOnSteps name={firdtBt} rollUp={showThordCalk} />
                        )}

                    </ScrollView>

                    {/**GO to profil */}
                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                        style={{ position: 'absolute', right: 0, top: 0 }}>
                        <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 20 }}>Prof</Text>
                    </TouchableOpacity>

                </View>

                
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                >
                    <View style={{ position: 'relative', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                        
                        <View>
                            <Text style={{ color: '#fff' }}>Name</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#fff', width: 200, height: 40 }}
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            {!photo ? (<TouchableOpacity
                                onPress={() => { }}
                                style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 10, width: 100, height: 40 }}>
                                <Text style={{ color: '#fff' }}>Add Photo</Text>
                            </TouchableOpacity>) : (
                                <Image />
                            )}
                            
                        </View>
                        
                        
                        <TouchableOpacity
                            style={{ position: 'absolute', bottom: 10, right: 10 }}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{'<='}</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
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
        justifyContent: 'center',
        marginTop: 50,
        position: 'relative',
    },
    bt: {
        backgroundColor: '#000',
        height: 100,
        //width: 340,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
    }
});
