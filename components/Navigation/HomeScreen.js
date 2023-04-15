import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Place from '../Items/Place';
import Restaurant from '../Items/Restaurant';
import Food from '../Items/Food';
import Hotel from '../Items/Hotel';
import Intro from '../Items/Intro';
import Moving from '../Items/Moving';
import Recomment from '../Items/Recomment';
import HomeStay from '../Items/HomeStay';
import Shopping from '../Items/Shopping';
import Fun from '../Items/Fun';
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceNavigation from '../Items/Place';

const Stack = createNativeStackNavigator();

function HomeNavigation(){
    return(
    <Stack.Navigator>
      <Stack.Screen name="TravelGO" component={HomeScreen} />
      <Stack.Screen name="Lời khuyên" component={Recomment} />
      <Stack.Screen name="Giới thiệu" component={Intro} />
      <Stack.Screen name="Nhà hàng" component={Restaurant} />
      <Stack.Screen name="Quán ăn" component={Food} />
      <Stack.Screen name="Di chuyển" component={Moving} />
      <Stack.Screen name="Giải trí" component={Fun}/>
      <Stack.Screen name="Mua sắm" component={Shopping}/>
      <Stack.Screen name="Khách sạn" component={Hotel} />
      <Stack.Screen name="Homestay" component={HomeStay} />
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
        <TouchableOpacity onPress={() => navigation.navigate('Nhà hàng')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/restaurant.png')}/>
                <Text style={styles.title}>Nhà hàng</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Quán ăn')}>
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
        <TouchableOpacity onPress={()=> navigation.navigate('Giải trí')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/entertain.png')}/>
                <Text style={styles.title}>Giải trí</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Mua sắm')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/shopping.png')}/>
                <Text style={styles.title}>Mua sắm</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Khách sạn')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/hotel.png')}/>
                <Text style={styles.title}>Khách sạn</Text>    
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
        <TouchableOpacity onPress={()=> navigation.navigate('Lời khuyên')}>
        <View style={{ paddingLeft : 10 }}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={require('../Image/recomment.png')}/>
                <Text style={styles.title}>Lời khuyên</Text>    
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Giới thiệu')}>
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