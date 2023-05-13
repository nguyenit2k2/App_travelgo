import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Trang chủ"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tài Khoản"
      component={Settings}
      options={{
        headerShown: false,
        tabBarLabel: 'Tài Khoản',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
      
  );
}