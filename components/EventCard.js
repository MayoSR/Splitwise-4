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
import { Button, Chip, DefaultTheme, Divider, Headline, Provider as PaperProvider, Surface, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const EventCard = () => {
    return (
        <Surface style={styles.paymentPaper}>
            <View style={styles.paymentView}>
                <View style={styles.transactionContainer}>
                    <Title style={{ fontSize: 24, }}>Formula 1: Monza</Title>
                    <Text style={{ fontSize: 10 }}>January 11, 2022 10:50 PM</Text>
                    <View style={styles.tags}>

                        {[1, 2].map(avt => { return <Chip key={avt} textStyle={{ fontSize: 10 }} style={{ marginRight: 5, height: 30 }} size={10} onPress={() => console.log('Pressed')}>Example Chip</Chip> })}
                    </View>
                </View>
                <View style={{ padding: 10, paddingTop: 0 }}>

                    <Divider />
                </View>
                <View style={styles.dataView}>

                    <View style={styles.members}>
                        {[1, 2, 3, 4, 5].map(avt => { return <Avatar.Icon style={{ marginLeft: -10 }} size={28} key={avt} icon="folder" /> })}

                    </View>
                    <Title size={32}>$25</Title>
                </View>
            </View>

        </Surface>
    );
};

const styles = StyleSheet.create({
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10
    },
    dataView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    members: {
        flexDirection: 'row',
        paddingLeft: 15
    },
    paymentView: {
        padding: 18,
        width: '100%'
    },
    paymentPaper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        elevation: 3,
        borderRadius: 10
    },
    transactionContainer: {
        flexDirection: 'column',
        marginLeft: 10
    },
    paymentText: {
        marginTop: 5,
        fontSize: 24
    },
    paymentNameDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    }


});

export default EventCard;
