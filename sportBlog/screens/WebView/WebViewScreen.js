import React, { useRef, useState, useEffect } from "react"; 
import { SafeAreaView, Text, View, TouchableOpacity, Dimensions } from "react-native";

import WebView from "react-native-webview";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';
import { LogLevel, OneSignal } from 'react-native-onesignal';


const WebViewScreen = () => {

    const [idfa, setIdfa] = useState(null);

    useEffect(() => {

        ReactNativeIdfaAaid.getAdvertisingInfo()
            .then((res) =>
                !res.isAdTrackingLimited ? setIdfa(res.id) : setIdfa(null),
            )
            .catch((err) => {
                console.log(err);
                return setIdfa(null);
            });
    }, []);

{/**
    useEffect(() => {
        if (idfa) {
            // Метод для запиту дозволів на push-сповіщення
            OneSignal.Notifications.requestPermission(true);
        }
    }, [idfa]);
    
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("dce89cfe-ba53-4956-8619-e5320af45988");

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
        console.log('OneSignal: notification clicked:', event);
    });

    //Add Data Tags
    OneSignal.User.addTag("key", "value");
 */}
    

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    console.log('windowHeight==>', windowHeight);
    console.log('windowWidth==>', windowWidth)


    //const product = `https://reactnative.dev/docs/animated`;
    const product = `https://terrific-glorious-exhilaration.space/xr29RSTj?advertising_id=${idfa}`;


    const refWebview = useRef(null);

    //ф-ція для повернення назад
    const goBack = () => {
        if (refWebview && refWebview.current) {
            refWebview?.current?.goBack();
        }
    };

    //ф-ція для оновлення сторінки
    const reloadPage = () => {
        if (refWebview && refWebview.current) {
            refWebview?.current?.reload();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191d24' }}>
            <WebView
                textZoom={100}
                allowsBackForwardNavigationGestures={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                source={{ uri: product }}
                allowsInlineMediaPlayback={true}
                setSupportMultipleWindows={false}
                mediaPlaybackRequiresUserAction={false}
                allowFileAccess={true}
                javaScriptCanOpenWindowsAutomatically={true}
                style={{ flex: 1, marginBottom: 7 }}
                ref={refWebview}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: -15 }}>

                <TouchableOpacity
                    style={{ marginLeft: 40 }}
                    onPress={goBack}>
                    <AntDesign name="left" style={{ color: '#fff', fontSize: 20 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginRight: 40, }}
                    onPress={reloadPage}>
                    <AntDesign name="reload1" style={{ color: '#fff', fontSize: 20 }} />
                </TouchableOpacity>
                
            </View>

        </SafeAreaView>
    )
};

export default WebViewScreen;
