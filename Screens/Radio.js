import React, { useState} from 'react'
import {View, Text,Button, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';





function RadioScreen() {
  const [images, setimages] = useState([
    require('../assets/spid.png'),
  ]);

  return (
   /* <FlatList data={images} key={2} numColumns={3} renderItem={({item}) => (<Image
      source={item}
      style={{
        width: 180,
        height: 220,
        borderWidth: 2,
        borderColor: "#c35547",
        resizeMode: "contain",
        margin: 6,
      }}
      keyExtractor={(item) => item.id}
    />
  )}
/>*/
<Text>Radio</Text>
);
}

const styles = StyleSheet.create({
 
    contentTextRadioTelevision: {
      fontSize: 30,
      color: '#ffffff',
    },
  
});



export default RadioScreen