import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {View, Button,TouchableHighlight, FlatList, Image } from 'react-native';
import { Card, Icon} from 'react-native-elements'
import styles from '../../../assets/styles';
import Header from '../../composants/Header';
import getBooks from "../../../models/books";

export default function books({route, navigation}) {
    const [ books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData()  {
            let books = await getBooks() ;
            setBooks(books);
        }
        fetchData() ;
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={books}
                    renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                      key={item.key}
                        onPress={() => navigation.navigate('book', { item })}>
                        <View style={{ backgroundColor: 'white'}}>

                        <Card>
                            <Card.Title>{item.fields["Nom"]} - {item.fields["Nom complet (from Auteur)"]}</Card.Title>
                            <Card.Divider/>
                            <Card.Image source={{uri: item.fields["Photo (from Auteur)"][0]["url"]}}>
                            </Card.Image>
                                <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Afficher' onPress={() => navigation.navigate('book', { item })} />
                        </Card>
                        </View>
                    </TouchableHighlight>
                    
                  )}
                />
            </View>
        </View>
    );
}
