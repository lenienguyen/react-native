import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from '../../../assets/styles';
import Header from "../../composants/Header";
import getBooks from "../../../models/books";
import { getData, storeData } from '../../../utils/StoreManager';

export default function book({route, navigation}) {
    const { item } = route.params ;
    const [ favoris, setFavoris] = useState(false);

    useEffect(() => {
        async function getFavoris()  {
            let favoris = await getData('@favoris_book_'+item.id) ;
            setFavoris(favoris);
        }
        getFavoris() ;
    }, []);

    const clicFavoris = async (favoris) => {
        await storeData('@favoris_book_' + item.id, favoris) ;
        setFavoris(favoris);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header navigation={navigation}/>
            <Button onPress={() => navigation.navigate('home')} title={"Retour"} />
            <View style={{ width: '100%', height: '90%'}}>
                <Text>{item.fields["Nom"]}</Text>
                <Text>{item.fields["Description"]}</Text>
                <Text>Auteur : {item.fields["Nom complet (from Auteur)"]}</Text>
                {item.fields["Photo (from Auteur)"] !== undefined && item.fields["Photo (from Auteur)"].length > 0 && <Image source={{uri: item.fields["Photo (from Auteur)"][0]["url"]}} style={{ width: '100%', height: '100%'}} />}


            </View>
        </View>
    );
}
