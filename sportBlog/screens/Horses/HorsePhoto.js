import React,{useEffect, useState} from "react";
import {SafeAreaView, View, Text ,StyleSheet,TouchableOpacity, Linking,Dimensions, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


import Ionicons from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get('window');
const numOfImagesPerRow = 3;
const imageMargin = 5;

const HorsePhoto = ({ navigation }) => {

    const [photo, setPhoto] = useState([]);
    console.log('photo==>', photo);

    useEffect(() => {
        getImgs()
    },[])

    const imageWidth = (width - (3 + 1) * 5) / 3;

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29676821-2dfd501c3768e552959bc01fb';
    const searchOption = 'image_type=photo&orientation=horizontal';
    const PER_PAGE = 150;

    const getImgs = () => {
        fetch(`https://pixabay.com/api/?key=29676821-2dfd501c3768e552959bc01fb&q=horse_racing&image_type=photo&per_page=${PER_PAGE}`)
            .then((res) => {
               return res.json()
            }).then(data => {
                console.log('data==>', data)
                setPhoto(data.hits)
            }).catch(e => {
                console.error(`Error: ${e}`);
            })
        
    };
    {/**
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29676821-2dfd501c3768e552959bc01fb';
const searchOption = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export const getImgs = (query, page) => {

    return fetch(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${searchOption}&per_page=${PER_PAGE}`)
        .then((res) => {
            return res.json()
        });
};
*/}
    
    return (
      
           
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>

                 {photo.map((item) => {
                return (
                    <Image
                        key={item.id}
                        style={{...styles,width: imageWidth, height: imageWidth }}
                        source={{ uri: item.previewURL }} />
                )
            })}
            </ScrollView>

           

            

            <TouchableOpacity
                style={{ position: 'absolute', bottom: 10, right: 10, }}
                onPress={() => navigation.navigate('HorsesHome')}
            >
                <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity>
        </SafeAreaView>
 
    );
};

export default HorsePhoto;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
          justifyContent: 'space-between',
        paddingHorizontal: 5,
        
    },
    image: {
        marginBottom: 5,
    },
});