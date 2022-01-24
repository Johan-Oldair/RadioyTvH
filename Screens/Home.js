import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MenuBotones from '../components/MenuBotones';
import RadioScreen from './Radio';
import TVScreen from './Tv';
import AyudaScreen from './Ayuda';


function HomeScreen(props) {
  return (
    <View style={{ flex: .8, alignItems: 'center', justifyContent: 'center' }}>
      <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 40}} >Entretenimiento</Text>
      <TouchableOpacity style={styles.TouchOpacityRadio} onPress={()=> props.navigation.navigate('Radio')}>
          <Text style={styles.contentTextRadioTelevision}>Radio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchOpacityRadio} onPress={()=> props.navigation.navigate('Televisión')}>
          <Text style={styles.contentTextRadioTelevision}>Televisión</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const Drawer = createDrawerNavigator();

//solo para la navegacion
function MyDrawer() {
  return (
    <NavigationContainer >
    <Drawer.Navigator  drawerContent={(props) => <Menuitems {...props} />} >
      <Drawer.Screen name="Radio y Televisión de Hidalgo" component={HomeScreen} />
      <Drawer.Screen name="Radio" component={RadioScreen} />
      <Drawer.Screen name="Televisión" component={TVScreen} />
      <Drawer.Screen name="Ayuda" component={AyudaScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

//menu real
const Menuitems = ({ navigation }) => {
  return (
      <DrawerContentScrollView style={styles.menu}>
        <Text style={styles.tituloMenu}>Radio y Televisión de Hidalgo</Text>
        <MenuBotones 
          text = "Inicio"
          onPress = { () => navigation.navigate('Radio y Televisión de Hidalgo')}
        />
        <MenuBotones 
          text = "Radio"
          onPress = { () => navigation.navigate('Radio')}
        />
        <MenuBotones 
          text = "Televisión"
          onPress = { () => navigation.navigate('Televisión')}
        />
        <MenuBotones 
          text = "Ayuda"
          onPress = { () => navigation.navigate('Ayuda')}
        />
      </DrawerContentScrollView>
    
  );
}


const styles = StyleSheet.create({
  TouchOpacityRadio: {
    marginTop:20, 
    width: 300,
    height: 60,
    backgroundColor: '#1e3799',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    },
    contentTextRadioTelevision: {
      fontSize: 30,
      color: '#ffffff',
    },
   menu: {
     padding: 15,     
   },
   tituloMenu: {
     fontSize: 20,
     fontWeight: 'bold',
     marginBottom: 50,
     textAlign: 'center',
   },
  
});


export default MyDrawer;