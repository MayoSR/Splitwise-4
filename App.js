/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Transac from './components/Home';
import Navbar from './components/Navbar';
import { navigationRef } from './components/RootNavigation';
import TransactionList from './components/TransactionList';
import Profile from './components/Profile';
import NewEvent from './components/NewEvent';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'indigo',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="List"
            component={TransactionList}
          />
          <Stack.Screen
            name="Create"
            component={NewEvent}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name="Stats"
            component={Profile}
          />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
