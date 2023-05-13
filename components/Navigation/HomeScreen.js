import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import Moving from '../Items/Moving';
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindScreen from './FindScreen';
import PlacesScreen from './PlacesScreen';
import PropertyInfoScreen from './PropertyInfoScreen';
import UserScreen from './UserScreen';
import ConfirmationScreen from './ConfirmationScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';


const Stack = createNativeStackNavigator();

function HomeNavigation(){
    return(
    <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name="TravelGO" component={HomeScreen} />
      <Stack.Screen name="Di chuyển" component={Moving} />
      <Stack.Screen name="Find" component={FindScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Places' component={PlacesScreen} />
      <Stack.Screen name='Info' component={PropertyInfoScreen}/>
      <Stack.Screen name='User' component={UserScreen}/>
      <Stack.Screen name='Confirmation' component={ConfirmationScreen}/>
    </Stack.Navigator>
    )
}

export default HomeNavigation;

function HomeScreen({navigation}){
    return (
    <ScrollView>
    <Image style={{width : 360 , height : 250,marginBottom : 10, padding: 0,borderRadius : 10}} source={{uri : 'https://img3.thuthuatphanmem.vn/uploads/2019/07/13/hinh-anh-thanh-pho-da-nang-dep-ve-dem_085827967.png'}}/>
    <View style={{paddingBottom : 20}}>
    <View style={styles.main}>
    </View>
     <View style={styles.main}>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/restaurant.png')}/>
                <Text style={styles.title}>Nhà hàng</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/food.png')}/>
                <Text style={styles.title}>Quán ăn</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Di chuyển')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/motorbike.png')}/>
                <Text style={styles.title}>Di chuyển</Text>    
            </View>
        </View>
        </TouchableOpacity>
    </View>
     <View style={styles.main}>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/entertain.png')}/>
                <Text style={styles.title}>Giải trí</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/shopping.png')}/>
                <Text style={styles.title}>Mua sắm</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/hotel.png')}/>
                <Text style={styles.title}>Khách sạn</Text>    
            </View>
        </View>
        </TouchableOpacity> 
    </View>
     <View style={styles.main}>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/homestay.png')}/>
                <Text style={styles.title}>HomeStay</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/recomment.png')}/>
                <Text style={styles.title}>Lời khuyên</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/idea.png')}/>
                <Text style={styles.title}>Giới thiệu</Text>    
            </View>
        </View>
        </TouchableOpacity>
    </View>
    </View>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    main:{
        flexDirection : 'row',
        paddingLeft : 10,
    },
    container:{
        marginTop : 3,
        alignItems : 'center',
        borderRadius : 10,
        backgroundColor : '#fff',
        elevation: 3,
        marginBottom : 3,
        width : 100,
        height : 100
    },
    title:{
        textTransform : 'uppercase',
        marginBottom : 0,
        fontWeight : '700',
        textAlign : 'center'
    },
    categoryImage:{
         width: 64,height : 64, marginTop: 10
    }
})