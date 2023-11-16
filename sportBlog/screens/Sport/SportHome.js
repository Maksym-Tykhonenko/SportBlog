import React,{useState,useEffect, useRef} from "react";
import {Animated, SafeAreaView,ScrollView, View,ImageBackground,StyleSheet, Text,TouchableOpacity, Alert, Modal, TextInput, Image, } from "react-native";

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    /////////////////////////////////////////////////loaderIsLoaded//////
    {/** 
    const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);

    const ChangeInView = props => {
        // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;
    
        const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0 to 1
        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 6000,
                useNativeDriver: true,
            }).start();
        }, []);

        const appearingAnim = useRef(new Animated.Value(0)).current;// Initial value for opacity: 1 to 0
        useEffect(() => {
            Animated.timing(appearingAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                setLoaderIsLoaded(true)
            }, 7000);

        }, []);

        return (
            <View style={{ position: 'relative' }}>
                <Animated.Image
                    source={require('../../acets/loader1.jpg')}// Special animatable View
                    style={{
                        ...props.style,
                        opacity: fadeAnim,
                        width: 380,
                        height: '100%'  // Bind opacity to animated value
                    }} />
                <Animated.Image
                    source={require('../../acets/loader2.jpg')}// Special animatable View
                    style={{
                        ...props.style,
                        opacity: appearingAnim,
                        width: 380,
                        height: '100%',
                        position: 'absolute'// Bind opacity to animated value
                    }} />
            </View>
    
        );
    };
 */}

    /////////////////////////////////////////////Work with AsyncStorage///////
    useEffect(() => {
        getData(); // Витягнути дані під час завантаження компонента
    }, []);
    

    useEffect(() => {
        saveData(); // Запис даних у AsyncStorage при зміні bankName, info або photo
    }, [username, info, photo]);

    // Функція для збереження даних у AsyncStorage
    const saveData = async () => {
        try {
            const data = {
                username,
                info,
                photo
            };

            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem('userData', jsonData);
            console.log('Дані збережено AsyncStorage');
        } catch (e) {
            console.log('Помилка збереження даних:', e);
        }
    };

    // Функція для отримання даних з AsyncStorage
    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('userData');
            if (jsonData !== null) {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData==>', parsedData)
                setUsername(parsedData.username);
                setInfo(parsedData.info);
                setPhoto(parsedData.photo);
                console.log('Дані витягнуті з AsyncStorage');
            }
        } catch (error) {
            console.error('Помилка отримання даних:', e);
        }
    };
    //////////////////////////////////////////////////////

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                console.log('response==>', response.assets[0].uri);
                setPhoto(response.assets[0].uri)
            } else {
                console.log('Вибір скасовано');
            }
            
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
                    source={require('../../acets/backgr.jpg')}
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
                        style={{ position: 'absolute', right: 10, top: 40 }}>
                        <MaterialCommunityIcons name='face-recognition' style={{ fontSize: 30, color: '#fff' }} />
                    </TouchableOpacity>

                    {/** MODAL */}
                    <Modal
                        transparent={true}
                        visible={isModalVisible}
                    >
                        <View style={{ position: 'relative', flex: 1, paddingTop: 30, backgroundColor: '#2f197b', paddingHorizontal: 10 }}>
                        
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
                                        style={{ width: 170, height: 170, borderRadius: 150 }}
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
                                style={{ position: 'absolute', bottom: 20, right: 20 }}
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
        marginTop: 60,
        position: 'relative',
    },
    bt: {
        position: 'relative',
        backgroundColor: '#2f197b',
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
