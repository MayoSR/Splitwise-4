/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import EventCard from './EventCard';

const TransactionList = () => {
    return (
        <ScrollView >
            <View style={{ paddingBottom: 20 }}>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(evt => { return <EventCard key={evt} /> })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({


});

export default TransactionList;
