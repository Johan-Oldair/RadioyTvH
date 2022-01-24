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
      <View >
        <TouchableOpacity  > 
          <Text style={styles.textoAyuda} >¿Como funciona la Aplicación Radio y Televisión de Hidalgo? </Text>
        </TouchableOpacity>
      <View  style={styles.linea} /> 
        <TouchableOpacity >
          <Text style={styles.textoAyuda}>¿Cómo seleccionar una estación de radio? </Text>
        </TouchableOpacity>
        <View  style={styles.linea} /> 
        <TouchableOpacity>
          <Text style={styles.textoAyuda}>¿Cómo seleccionar una estacion de televisión?</Text>
        </TouchableOpacity>
        <View  style={styles.linea} /> 
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
        color: 'green',
        padding: 10,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        
      },
      linea: {
       borderBottomColor: 'blue',
        borderBottomWidth: 1,
      }
  });

  export default AyudaScreen;

  
  
  