import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

const MenuBotones = ({text, onPress}) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.botonesContainer}>
        <Text style={styles.textContainer}>{text}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botonesContainer: {
        marginBottom: 30,
        padding: 15,
        backgroundColor: '#1e3799',
        borderRadius: 15,
    },
    textContainer: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        
       
    }
});

export default MenuBotones