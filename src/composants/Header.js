//import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {View, Text, Button} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import styles from '../../assets/styles';

export default function Header(props) {

    return (
        <View style={[styles.bg]}>
            <Button onPress={() => props.navigation.navigate('home')} title={"Accueil"}/>
            <Button onPress={() => props.navigation.navigate('start')} title={"Start"}/>
            <Button onPress={() => props.navigation.navigate('books')} title={"Books"}/>
        </View>        
    );
}

