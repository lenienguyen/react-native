import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../../../assets/styles';
import Header from "../../composants/Header";
import MyButton from "../../composants/MyButton";

export default function index({route, navigation}) {
    const { button } = route.params??{} ;
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <Text>Vous avez cliqué sur {button}</Text>
            <MyButton
                title="Retour au début"
                onPress={() => navigation.navigate('start')}
              />
            <StatusBar style="auto" />
        </View>
    );
}
