import React,{useEffect, useState} from "react";
import {ScrollView, View, Text, TouchableOpacity, Image , Linking} from "react-native";

import { uid } from 'uid';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HorseNews = ({ navigation }) => {
    
  const [news, setNews] = useState([])
    console.log('news ==>', news)

    useEffect(() => {
        getNews()
    }, []);
//'&apiKey=' + API_KEY
    const API_KEY = '457f28a414374255bef076ebfec01ad5';
    const url = 'https://newsapi.org/v2/everything?';
// https://newsapi.org/v2/top-headlines?  country=us&category=business
    
    const getNews = () => {
        fetch(`${url}q=horse_racing&pageSize=100&sortBy=publishedAt&apiKey=${API_KEY}`).then((res) => res.json()).then(data => {
            //console.log(data);
            setNews(data.articles)

        }).catch(e => {
            console.error(`Error: ${e}`);
        })
    }

    
    // Функція для відкриття посилання на повну статтю
    const openFullArticle = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={{position: 'relative' ,flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Horse News</Text>


             <ScrollView style={{ flex: 1, marginTop: 20, marginHorizontal: 10, }}>
            
                {news.map((item) => {
                    return (
                        <View
                            style={{ borderWidth: 1,  borderRadius: 5 , padding: 10, marginBottom: 20,backgroundColor: 'white'}}
                            key={uid()}>
                            
                            
                            <Image
                                style={{width: '100%', height: 250,borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                source={{uri: item.urlToImage}}
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Newspaper: </Text>{`${item.source.name}`}</Text>
                            <Text style={{ fontSize: 14, color: 'grey' }}><Text style={{ fontWeight: 'bold' }}>Author: </Text>{item.author}</Text>
                            <Text style={{ fontSize: 20 , marginTop: 5,color: 'black' }}><Text style={{fontWeight:'bold'}}>Description: </Text>{item.description}</Text>
                            <Text style={{ fontSize: 20, marginTop: 5 ,color: 'black' }}><Text style={{fontWeight:'bold'}}>Content: </Text>{item.content}</Text>
                            
                            <TouchableOpacity
                                 style={{ marginTop: 10 }}
                                onPress={() => openFullArticle(item.url)}>
                                <Text style={{ color: 'blue' }}>Read Full Article</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}

            

           
            </ScrollView>

            <TouchableOpacity
                style={{position: 'absolute',bottom: 10, right: 10,  }}
                onPress={()=>navigation.navigate('HorsesHome')}
            >
                <Ionicons name='arrow-undo-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity>
        </View>
    )
};

export default HorseNews;