import React from 'react'
import {View, Text,Image} from 'react-native'


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text> Este es la pagina de INICIO</Text>
         <Image source={{uri:'https://picsum.photos/300/300'}} style={{
          width:'100%',
          height:300,
          borderRadius:15,
          marginTop:20
        }}></Image>

      </View>
    );
  }

export default HomeScreen