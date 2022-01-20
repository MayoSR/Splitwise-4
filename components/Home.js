/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, DefaultTheme, Divider, Headline, Provider as PaperProvider, Surface, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import PaymentCard from './PaymentCard';

const Home = () => {
    return (
        <ScrollView>
            <Appbar.Header style={styles.appHeader}>
                <View style={styles.appHeaderView}>

                    <IconButton
                        icon="menu"
                        color={'#fff'}
                        size={32}
                        onPress={() => console.log('Pressed')}
                    />
                    <Appbar.Content title="Title" subtitle={'Subtitle'} />
                </View>
            </Appbar.Header>
            <View style={styles.invoiceDetails} >
                <View>
                    <Title style={styles.titleStyle}>Your Balance</Title>
                    <Text style={[styles.textStyle]}>$ 50,000</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <View>
                    <Text style={[styles.titleStyle, { color: 'indigo' }]}>Owe</Text>
                    <Text style={[styles.textStyle, { color: 'indigo' }]}>$5000</Text>
                </View>
                <View>
                    <Text style={[styles.titleStyle, { color: 'indigo' }]}>Owed</Text>
                    <Text style={[styles.textStyle, { color: 'indigo' }]}>$5000</Text>
                </View>
            </View>
            <Divider />
            <View style={{ paddingBottom: 60 }}>
                {[1, 2, 3, 4, 5].map(card => { return <PaymentCard key={card} /> })}
            </View >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    appHeader: {
        height: 60,
    },
    textStyle: {
        fontSize: 42,
        color: 'white',
        textAlign: 'center',
    },
    titleStyle: {
        textAlign: 'center',
        color: 'white'
    },
    invoiceDetails: {
        height: 150,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }

});

export default Home;
