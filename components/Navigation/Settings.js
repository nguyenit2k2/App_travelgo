import * as React from 'react';
import { Text, View, ScrollView, FlatList,TouchableOpacity,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Customer/Login';
import Register from '../Customer/Register'

const Stack = createNativeStackNavigator();

export default function SettingsNavigation(){
    return(
      <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Settings} />
      <Stack.Screen name="Mật khẩu" component={Password} />
      <Stack.Screen name="Tổng đài trợ giúp" component={Help} />
      <Stack.Screen name="Đánh giá" component={Feedback} />
      <Stack.Screen name="Đăng nhập" component={Login} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    )
}


function Settings({navigation}) {
  return (
    <View style={styles.container}>
  
    <View style={styles.imageContainer}>
      <Image style={styles.image} source= {require('../Image/img_2.png')}/>
      <View style={styles.header}>
    <Text style={styles.title}>TRAVEL GO</Text>
    <Text style={styles.subtitle}>Welcome to my app!</Text>
  </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=> navigation.navigate('Đăng nhập')}>
          <Text style={styles.text}>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}
function Password(){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nsadasdsad!</Text>
    </View>
  )
}

function Help(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom : 20}}>Tổng đài liên hệ: 0963768642</Text>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom: 20}}>Liên hệ ZALO</Text>
        <Image style={{ width : '75%', height: '40%' }} source={require('../Image/QR.jpg')} />
      </View>
    )
}

function Feedback(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom : 20}}>Tính năng đang được phát triển</Text>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom: 20, fontWeight: '700'}}>Cảm ơn bạn đã ủng hộ chúng tôi</Text>
      </View>
    )
}

function Sendbug(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom : 20}}>Tính năng đang được phát triển</Text>
        <Text style={{fontSize: 21 , fontStyle : 'italic', paddingBottom: 20, fontWeight: '700'}}>Cảm ơn bạn đã ủng hộ chúng tôi</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
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