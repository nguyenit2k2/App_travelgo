import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import Moving from '../Items/Moving';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import Restaurant from '../Items/Restaurant';
import Food from '../Items/Food';
import Hotel from '../Items/Hotel';
import Intro from '../Items/Intro';
import Recomment from '../Items/Recomment';
import HomeStay from '../Items/HomeStay';
import Shopping from '../Items/Shopping';
import Fun from '../Items/Fun';
const Stack = createNativeStackNavigator();

function HomeNavigation(){
    const handleBackButton = () => {
        return true; // Chặn sự kiện quay lại màn hình trước đó
      };
      
      // Đăng ký hàm xử lý sự kiện khi mount component
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
      }, []);
    return(
    <Stack.Navigator>
       
      <Stack.Screen name="TravelGO" component={HomeScreen} />
      <Stack.Screen name="Moving" component={Moving} />
      <Stack.Screen name="Advice" component={Recomment} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Enterntain" component={Fun}/>
      <Stack.Screen name="Shopping" component={Shopping}/>
      <Stack.Screen name="The Hotel" component={Hotel} />
      <Stack.Screen name="Homestay" component={HomeStay} />
    </Stack.Navigator>
    )
}

export default HomeNavigation;

function HomeScreen({navigation}){
    return (
    <ScrollView>
    <Image style={{width : 360 , height : 250,marginBottom : 10, padding: 0,borderRadius : 10}} source={{uri : 'https://image.vietstock.vn/2023/02/13/du-lich-viet-nam-vi-sao-that-bai_1537992.jpg'}}/>
    <View style={{paddingBottom : 20}}>
    <View style={styles.main}>
    </View>
     <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/restaurant.png')}/>
                <Text style={styles.title}>Restaurant</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Food')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/food.png')}/>
                <Text style={styles.title}>Food</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Moving')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/motorbike.png')}/>
                <Text style={styles.title}>Moving</Text>    
            </View>
        </View>
        </TouchableOpacity>
    </View>
     <View style={styles.main}>
        <TouchableOpacity onPress={()=> navigation.navigate('Enterntain')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/entertain.png')}/>
                <Text style={styles.title}>Enterntain</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Shopping')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/shopping.png')}/>
                <Text style={styles.title}>Shopping</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('The Hotel')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/hotel.png')}/>
                <Text style={styles.title}>The Hotel</Text>    
            </View>
        </View>
        </TouchableOpacity> 
    </View>
     <View style={styles.main}>
        <TouchableOpacity onPress={()=> navigation.navigate('Homestay')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/homestay.png')}/>
                <Text style={styles.title}>HomeStay</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Advice')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/recomment.png')}/>
                <Text style={styles.title}>Advice</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Intro')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/idea.png')}/>
                <Text style={styles.title}>Introduce</Text>    
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