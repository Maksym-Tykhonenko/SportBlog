import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const RegScreen = () => {
    


    const [screen, setScreen] = useState('firstScreen');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {screen === 'firstScreen' &&
                <View style={{}}>
                    <Text style={{ marginBottom: 20, fontSize: 30 }}>Hello world!!!</Text>

                    <TouchableOpacity
                        onPress={() => setScreen('secodScreen')}
                        style={{ borderWidth: 1, borderRadius: 5, width: 150, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            }

            {screen === 'secodScreen' &&
                <View style={{}}>
                    <Text style={{ marginBottom: 20, fontSize: 30 }}>Secod scree!!!</Text>
          
                    <Text style={{ marginBottom: 20, fontSize: 30 }}>Add name & age</Text>

                    <TouchableOpacity
                        onPress={() => setScreen('tirdScreen')}
                        style={{ borderWidth: 1, borderRadius: 5, width: 150, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            }
      
            {screen === 'tirdScreen' &&
                <View style={{}}>
                    <Text style={{ marginBottom: 20, fontSize: 30 }}>Secod scree!!!</Text>
          
                    <Text style={{ marginBottom: 20, fontSize: 30 }}>Add photo</Text>

                    <TouchableOpacity
                        style={{ borderWidth: 1, borderRadius: 5, width: 150, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            }



      
        </View>
    );

};

export default RegScreen;