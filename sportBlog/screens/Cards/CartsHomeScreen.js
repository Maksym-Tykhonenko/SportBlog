import React, { useEffect, useState } from "react";
import { Modal,Button,ScrollView,View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, TextInput, Image,KeyboardAvoidingView } from "react-native";

import { uid } from 'uid';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { carts } from '../../data/Carts';

const CartsHomeScreen = ({ navigation }) => {
    const [allData, setAllData] = useState(carts);
    console.log('allData==>', allData)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [gamename, setGamename] = useState('');
    const [howtoWin, setHowToWin] = useState('');
    const [winningcombination, setWinningCombinations] = useState('');
    
    const [photo, setPhoto] = useState(null);
    console.log(winningcombination)
    ////////////////////////////////////////////////////////
    useEffect(() => {
        getData(); // Витягнути дані під час завантаження компонента
    }, []);
    

    useEffect(() => {
        saveData(); // Запис даних у AsyncStorage при зміні bankName, info або photo
    }, [allData, photo]);

    // Функція для збереження даних у AsyncStorage
    const saveData = async () => {
        try {
            const data = {
                info: allData,
                photo
            };

            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem('cartData', jsonData);
            console.log('Дані збережено AsyncStorage');
        } catch (e) {
            console.log('Помилка збереження даних:', e);
        }
    };

    // Функція для отримання даних з AsyncStorage
    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('cartData');
            if (jsonData !== null) {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData==>', parsedData);
                setAllData(parsedData.info);
                setPhoto(parsedData.photo);
                console.log('Дані витягнуті з AsyncStorage');
            }
        } catch (error) {
            console.error('Помилка отримання даних:', e);
        }
    };

    ////////////////////////////////////////////////////////////
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

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const modalClose = () => {
        setGamename('');
        setHowToWin('');
        setWinningCombinations('');
        setPhoto(null)

        toggleModal();
    };

    const addGame = () => {
        let newGame = {
            id: uid(),
            name: gamename,
            howToWin: howtoWin,
            winningCombinations: winningcombination,
            photo,
        };
        console.log('newGame==>', newGame)

        setAllData([newGame, ...allData]);
        console.log('allData==>', allData)
        modalClose();
    };
    
    //console.log(carts);
    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                source={require('../../acets/backgr.jpg')}
                style={styles.bgr}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.contentCoteier}>
               
                        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10,marginTop: 5, color: '#fff' }}>Cards & Casino Game: </Text>

                        <ScrollView>

                            {/**рендер карочних ігор у вигляді кнопок */}
                            {allData.map((cart) => (
                                <TouchableOpacity
                                    style={styles.gameBtn}
                                    onPress={() => navigation.navigate("CartDitailScreen", { game: cart })}
                                    key={cart.id}>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 5, }}>{cart.name}</Text>
                                
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    
                        {/**BT Modal ope */}
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={{ position: 'absolute', borderColor: '#fff', right: 10, top: 8, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50 }}>
                       
                            <AntDesign name="plus" style={{ color: '#fff', fontSize: 35 }} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                
                {/**MADAL ADD GAME */}
                <Modal
                    style={styles.modal}
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={styles.modalContainer}>
                        
                        <ScrollView style={styles.modalContent}>

                            <View>
                                <Text style={{ color: '#fff' }}>name of game</Text>
                                <TextInput
                                    value={gamename}
                                    onChangeText={setGamename}
                                    style={styles.input} />
                            </View>

                            <View>
                                <Text style={{ color: '#fff' }}>How To Win</Text>
                                <TextInput
                                    value={howtoWin}
                                    onChangeText={setHowToWin}
                                    multiline={true}
                                    //numberOfLines={2}
                                    style={styles.input} />
                            </View>
                            
                            <View>
                                <Text style={{ color: '#fff' }}>Winning Combinations</Text>
                                <TextInput
                                    value={winningcombination}
                                    onChangeText={setWinningCombinations}
                                    multiline={true}
                                    style={styles.input} />
                            </View>

                            <View>
                                {photo ? (
                                    <Image
                                        style={{ height: 200, width: '100%' }}
                                        source={{ uri: photo }} />
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => ImagePicer()}
                                    >
                                        <MaterialIcons name="add-a-photo" style={{ color: '#fff', fontSize: 35 }} />
                                    </TouchableOpacity>
                                )}
                                
                            </View>
                            
                            {/**BT Modal add i modal ifo about game  <AntDesign name="closecircleo" style={{ color: '#fff', fontSize: 35 }} />*/}
                            <View style={{ marginTop: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ borderWidth: 2, borderRadius: 25, borderColor: '#fff', paddingHorizontal: 10, paddingVertical: 10, width: 150, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={addGame}
                                >
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD GAME +</Text>
                                
                                </TouchableOpacity></View>

                            {/**BT Modal close */}
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 5 }}
                                onPress={modalClose}
                            >
                                <AntDesign name="closecircleo" style={{ color: '#fff', fontSize: 35 }} />
                            </TouchableOpacity>

                        </ScrollView>

                    </View>
                </Modal>

            </ImageBackground>

        </SafeAreaView>
    );
};

export default CartsHomeScreen;

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
    contentCoteier: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        marginHorizontal: 20
        
    },
    gameBtn: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        width: 250,
        height: 40,
        //opacity: 0.3
        backgroundColor: '#00111d80'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Півпрозорий фон
    
    },
    modal: {
        position: 'relative',
        marginTop: 30
    },
    modalContent: {
        width: "100%", // Задайте ширину вікна за своїми потребами
        backgroundColor: '#2f197b',
        padding: 20,
        marginTop:30,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: 280,
        //height: 35,
        borderColor: '#36454f',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#fff',
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 10,
        marginTop: 5

    },
});