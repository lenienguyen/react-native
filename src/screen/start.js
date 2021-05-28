import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../assets/styles';

export default function start({navigation}) {
    const [value, onChangeText] = React.useState('Adresse e-mail');

    return (
        <View style={styles.container}>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

            {<Button title={"Se connecter"} />}
            {<Button title={"S'inscrire"} />}
            
            {<Button onPress={() => navigation.navigate('home', {button: 'ok'})} title={"Ok !"} />}
            {<Button onPress={() => navigation.navigate('home', {button: 'pas ok'})} title={"Pas Ok !"} />}
            <StatusBar style="auto" />
        </View>
    );
}