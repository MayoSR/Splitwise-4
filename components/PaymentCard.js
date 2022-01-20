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
import Icon from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const PaymentCard = () => {
    return (
        <Surface style={styles.paymentPaper}>
            <View style={styles.paymentView}>
                <View style={styles.paymentNameDetails}>
                    <View style={styles.paymentAvatarContainer}>

                        <Avatar.Icon size={42} icon="folder" />

                    </View>
                    <View style={styles.transactionContainer}>
                        <Title style={{ fontSize: 18, }}>Jonathon Joestar</Title>
                        <Text style={{ fontSize: 12, marginTop: -5 }}>January 11, 2022 10:50 PM</Text>
                    </View>
                </View>
                <Title style={{ textAlign: 'right' }}>$25</Title>
            </View>

        </Surface>
    );
};

const styles = StyleSheet.create({
    paymentView: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
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

export default PaymentCard;
