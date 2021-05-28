import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../../../assets/styles';
import Header from "../../composants/Header";

export default function index({navigation}) {
    useEffect(() => {
        navigation.navigate('books');
    }, []);

    return (
        <View style={styles.container}>
            <Text>Bienvenue sur AppBook !</Text>
        </View>
    );
}
