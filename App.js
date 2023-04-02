import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabNavigation from './components/Navigation/TabNavigation';

import { Button } from 'react-native';
import Login from './components/Customer/Login';
import Settings from './components/Navigation/Settings'
// const Stack = createNativeStackNavigator();

export default class App extends React.Component{
        render(){
            return(
                <Settings></Settings>
            );
    }
}