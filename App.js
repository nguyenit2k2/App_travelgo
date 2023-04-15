import * as React from 'react';
import { Text, View, ScrollView, FlatList,Image, TouchableOpacity,SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabNavigation from './components/Navigation/TabNavigation';

import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// const Stack = createNativeStackNavigator();

export default class App extends React.Component{
        render(){
            return(
                <NavigationContainer>
                <Stack.Navigator >
                  <Stack.Screen name="Splash" component={TravelGo} options={{headerShown: false}}/>
                  <Stack.Screen name="Tabnavigation" component={TabNavigation} options={{headerShown: false}}/>
                </Stack.Navigator>
                </NavigationContainer>
                )
    }
}
function TravelGo({navigation}){
    return(
    <SafeAreaView style={styles.container}>
  
    <View style={styles.imageContainer}>
      <Image style={styles.image} source= {require('./components/Image/img_2.png')}/>
      <View style={styles.header}>
    <Text style={styles.title}>TRAVEL GO</Text>
    <Text style={styles.subtitle}>Welcome to my app!</Text>
  </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=> navigation.navigate('Tabnavigation')}>
          <Text style={styles.text}>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    marginTop: 30,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: 'lightgray'
    },
   
    imageContainer: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    image: {
      width : '100%',
      height : '100%',
      resizeMode: 'cover'
    },
    header:{
      position:'absolute',
      width : '100%',
      backgroundColor:'white'
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
    item: {
      position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize : 40,
      fontWeight: '700',
      justifyContent : 'center',
      color : '#00FFFF'
    }
  });