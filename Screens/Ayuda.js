import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
/*import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
*/

function AyudaScreen( {navigation}) {
    return (
      <View style={{ flex: .5,}}>
        <TouchableOpacity  > 
          <Text style={styles.textoAyuda} >¿Como funciona la Aplicación Radio y Televisión de Hidalgo? </Text>
        </TouchableOpacity>
  
        <TouchableOpacity>
          <Text style={styles.textoAyuda}>¿Cómo seleccionar una estación de radio?
          {"\n"}
          __________________________________________________</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textoAyuda}>¿Cómo seleccionar una estacion de televisión?
          {"\n"}
          __________________________________________________</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  function comoFunciona() {
    return (
      
      <Text>Hola</Text>
    );
  }
  
  //menu
 /* const AyudaStack = createNativeStackNavigator();

  function AyudaStackScreen (){
    return(
      <NavigationContainer>
        <AyudaStack.Navigator>
            <AyudaStack.Screen name='comoFunciona' component={comoFunciona} />
        </AyudaStack.Navigator>
    </NavigationContainer>
    );
  }*/
 
const styles = StyleSheet.create({
    textoAyuda: {
        color: '#130f40',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        
      },
  });

  export default AyudaScreen;

  
  
  