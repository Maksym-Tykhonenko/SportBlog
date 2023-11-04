import React,{useState} from "react";
import {ScrollView, View,ImageBackground,StyleSheet, Text,TouchableOpacity, Alert, Modal, TextInput, Image, ScrollViewComponent } from "react-native";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CalkSteps from "./CalkSteps";
import CalkCalorii from "./CalkCalorii";
import CalkCaloriiOnSteps from "./CalkCaloriiOnSteps";

const SportHome = ({ navigation }) => {
    {/**state title name */ }
    const [firstBt, setFirstBt] = useState('Calculator of Steps Walked in Meters(m)');
    const [secedBt, setsecedBt] = useState('Convert steps taken to calories');
    const [firdtBt, setfirdtBt] = useState('Calculator of burned calories by push-ups');
    {/**state scrolUp calc */ }
    ///////////////////////////////////////////////////////////////
    const [showFirstBt, setShowFirstBt] = useState(true)
    const [showSecodBt, setShowSecodBt] = useState(true)
    const [showThordBt, setShowThordBt] = useState(true);

    ///////////////////////////////////////////////////////////////
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [info, setInfo] = useState('');
    console.log('info==>', info)

    const [username, setUsername] = useState('');
    console.log('username==>', username);
    const [writingUsername, setWritingUsername] = useState('');

    const [photo, setPhoto] = useState(null);

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            console.log('response==>', response.assets[0].uri);
            setPhoto(response.assets[0].uri)
        })
    };


    const showFirstCalk = () => {
        //Alert.alert('showFirstCalk')
        //console.log(item)
        setShowFirstBt((prevSt) => {
            return !prevSt;
        });
        
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

    {/**add ifo from colculators */ }
    const handleAddInfo = (newInfo) => {
        //console.log('newInfo', newInfo);
        setInfo([newInfo, ...info]);
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
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}>{firstBt}</Text>
                                <AntDesign name='arrowdown' style={{ color: '#fff', fontSize: 25, position: 'absolute', bottom: 5, left: 20 }} />
                            </TouchableOpacity>
                        ) : (
                            <CalkSteps name={firstBt} rollUp={showFirstCalk} handleAddInfo={handleAddInfo} />
                        )}

                        {showSecodBt ? (
                            <TouchableOpacity
                                onPress={() => showSecodCalk()}
                                style={styles.bt}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}>{secedBt}</Text>
                                <AntDesign name='arrowdown' style={{ color: '#fff', fontSize: 25, position: 'absolute', bottom: 5, left: 20 }} />
                            </TouchableOpacity>
                        ) : (
                            <CalkCalorii name={secedBt} rollUp={showSecodCalk} handleAddInfo={handleAddInfo} />
                        )}

                        {showThordBt ? (
                            <TouchableOpacity
                                onPress={() => showThordCalk()}
                                style={styles.bt}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}>{firdtBt}</Text>
                                <AntDesign name='arrowdown' style={{ color: '#fff', fontSize: 25, position: 'absolute', bottom: 5, left: 20 }} />
                            </TouchableOpacity>
                        ) : (
                            <CalkCaloriiOnSteps name={firdtBt} rollUp={showThordCalk} handleAddInfo={handleAddInfo} />
                        )}

                    </ScrollView>

                   

                </View>
                {/**GO to profil */}
                <TouchableOpacity
                    onPress={() => setIsModalVisible(true)}
                    style={{ position: 'absolute', right: 10, top: 30 }}>
                    <MaterialCommunityIcons name='face-recognition' style={{ fontSize: 30, color: 'yellow' }} />
                </TouchableOpacity>

                {/** MODAL */}
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                >
                    <View style={{ position: 'relative', flex: 1, paddingTop: 30, backgroundColor: '#000', paddingHorizontal: 10 }}>
                        
                        {!username ? (
                            <View style={{ marginBottom: 40 }}>
                                <Text style={{ color: '#fff', marginBottom: 10, fontSize: 20 }}>Tipe name :</Text>
                                <TextInput
                                    value={writingUsername}
                                    onChangeText={setWritingUsername}
                                    style={{ marginBottom: 15, color: '#fff', paddingLeft: 10, fontSize: 20, borderWidth: 1, borderColor: '#fff', borderRadius: 10, width: 200, height: 40 }}
                                />
                                <TouchableOpacity
                                    style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 10, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => setUsername(writingUsername)}
                                >
                                    <Text style={{ color: '#fff', }}>Save name</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={{ marginBottom: 40 }}>
                                <Text style={{ paddingLeft: 10, color: '#fff', fontSize: 30 }}>{username}</Text>
                            </View>
                        )}
                        

                        <View style={{ marginBottom: 40 }}>
                            {!photo ? (<TouchableOpacity
                                onPress={() => ImagePicer()}
                                style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 10, width: 100, height: 40, marginBottom: 20 }}>
                                <Text style={{ color: '#fff' }}>Add Photo</Text>
                            </TouchableOpacity>) : (
                                <Image
                                    style={{ width: 150, height: 150, borderRadius: 10 }}
                                    source={{ uri: photo }} />
                            )}
                            
                        </View>

                        {!info ? (
                            <View></View>
                        ) : (
                            <View>
                                <ScrollView>
                                    {info.map((item) => {
                                        return (
                                            <View key={item.id}>
                                                <Text style={{ color: '#808080', fontSize: 12, }}>{item.data}</Text>
                                                <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>{item.info}</Text>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                           
                            </View>
                        )}
                        
                        
                        
                        <TouchableOpacity
                            style={{ position: 'absolute', bottom: 10, right: 10 }}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Ionicons name='arrow-undo-sharp' style={{ color: '#fff', fontSize: 25 }} />
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
        position: 'relative',
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
