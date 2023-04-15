import * as React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
      <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeScreen} 
          options={{
            headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hand-extended" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Tiện ích khác" component={Settings} 
          options={{
            headerShown: false,
          tabBarLabel: 'Tiện ích khác',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hand-extended" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
  );
}