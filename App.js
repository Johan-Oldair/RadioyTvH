import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home';
import RadioScreen from './Screens/Radio';
import TVScreen from './Screens/Tv';
import hidalgo from './assets/hidalgo.png'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Radio" component={RadioScreen} />
        <Drawer.Screen name="Tv" component={TVScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}