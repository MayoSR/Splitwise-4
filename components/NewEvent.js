/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, IconButton, Button, TextInput, Title, Chip } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const renderContent = () => (
    <View
        style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
        }}
    >
        <Text>Swipe down to close</Text>
    </View>
);

const NewEvent = () => {


    // You can also use as a promise without 'callback':
    // const result = await launchImageLibrary();

    const [attendees, setAttendees] = useState([1])

    return (
        <ScrollView style={styles.rootContainer} keyboardShouldPersistTaps={'handled'}>
            <Appbar.Header style={styles.appHeader}>
                <Title style={{ color: 'white', paddingLeft: 10 }}>New Event</Title>
                <View style={styles.appHeaderView}>

                    <Button mode='text' color={'#fff'}>Split</Button>
                </View>
            </Appbar.Header>
            <View style={styles.container}>
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: '100%', height: 200, marginBottom: 20 }} />
                <TextInput
                    label="Event Name"
                    style={{ marginBottom: 20 }}
                />
                <View style={styles.currencyInput}>

                    <TextInput
                        label="Total Bill"
                        style={{ flexGrow: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    />
                    <IconButton
                        icon="currency-usd"
                        size={32}
                        color={'indigo'}
                        style={styles.iconButtonStyle}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>

                    <Chip icon="plus" onPress={() => console.log('Pressed')}>Add tags</Chip>
                </View>
                <ScrollView style={{ paddingBottom: 60 }} keyboardShouldPersistTaps={'handled'}>
                    <View>

                        <Title style={{ marginTop: 20, marginBottom: 20, fontSize: 28 }} size={24}>Attendees</Title>
                    </View>
                    {attendees.map(att => {
                        return <View key={att} style={styles.attendedUser}>

                            <View style={{ flex: 0.7 }}>

                                <TextInput
                                    label="Name"

                                />
                            </View>
                            <View style={{ flex: 0.3, marginLeft: 10 }}>

                                <TextInput
                                    label="$"

                                />
                            </View>
                            <IconButton
                                icon="minus"
                                size={32}
                                color={'indigo'}
                                onPress={() => setAttendees(attendees.filter(user => att !== user))}
                            />
                        </View>
                    })}
                    <Button mode="contained" onPress={() => setAttendees([...attendees, attendees[attendees.length - 1] + 1])}>Add attendee</Button>
                </ScrollView>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={10}
                renderContent={renderContent}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    attendedUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    iconButtonStyle: {
        borderRadius: 0,
        backgroundColor: '#ddd',
        height: 64,
        borderTopRightRadius: 5,
        width: 60,
        margin: 0
    },
    appHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        padding: 20
    },
    currencyInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around'
    },
    rootContainer: {
        paddingBottom: 60
    }
});

export default NewEvent;
