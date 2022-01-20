import * as React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import * as RootNavigation from './RootNavigation.js';

const Navbar = () => {



    return (
        <View style={styles.bottomNavigation}>
            <TouchableNativeFeedback onPress={() => { RootNavigation.navigate('Home') }} >

                <Icon size={28} name={"home"} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => RootNavigation.navigate('List')}>

                <Icon size={28} name={"list"} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={styles.centerButtonContainer} onPress={() => RootNavigation.navigate('Create')}>

                <Icon size={64} style={styles.centerButton} name={"plus"} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => RootNavigation.navigate('Profile')}>
                <Icon size={28} name={"user"} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => RootNavigation.navigate('Profile')}>
                <Icon size={28} name={"activity"} />
            </TouchableNativeFeedback>


        </View >
    );
};

const styles = StyleSheet.create({
    centerButton: {
        backgroundColor: 'indigo',
        marginTop: -30,
        borderRadius: 50,
        elevation: 2,

    },
    bottomNavigation: {
        height: 50,
        backgroundColor: 'indigo',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        bottom: 0,
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 6
    }
});

export default Navbar;