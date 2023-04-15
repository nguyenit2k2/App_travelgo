import * as React from 'react';
import { Text, View, ScrollView, FlatList,TouchableOpacity,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Customer/Login';

const Stack = createNativeStackNavigator();

export default function SettingsNavigation(){
    return(
    <Stack.Navigator >
      <Stack.Screen name="Cài đặt" component={Settings} />
      <Stack.Screen name="Mật khẩu" component={Password} />
      <Stack.Screen name="Tổng đài trợ giúp" component={Help} />
      <Stack.Screen name="Đánh giá" component={Feedback} />
      <Stack.Screen name="Đăng nhập" component={Login} />
    </Stack.Navigator>
    )
}


function Settings({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text onPress={navigation.navigate("Mật khẩu")}>Nofication!</Text> */}
      <View style={styles.topImage}>
      <Image style={styles.image} source={{uri : "https://www.sandybeachdanang.com/uploads/image/images/4-Cau-Rong-Han-Cau-Thuan-Phuoc.jpg"}}/>
      </View>
      <View style={styles.item}>
      <TouchableOpacity onPress={()=> navigation.navigate('Tổng đài trợ giúp')}>
      <View>
        <Text style={styles.text}>Tổng đài trợ giúp</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.item}>
      <TouchableOpacity onPress={()=> navigation.navigate('Đăng nhập')}>
      <View>
        <Text style={styles.text}>Đăng nhập</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.item}>
      <TouchableOpacity >
      <View>
        <Text style={styles.text}>Báo lỗi</Text>
      </View>
      </TouchableOpacity>
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
      width : '100%',
      alignItems:'center',
      backgroundColor: 'lightgray'
    },
    item:{
      width: "95%",
      marginTop: 30,
      height:  40,
      borderRadius : 4,
      borderColor : '#333',
      borderWidth : 1,
      alignItems:'center',
      justifyContent : 'center',
      backgroundColor: '#333'
      
    },
    text:{
      textAlign: 'center',
      fontSize : 15,
      fontWeight: '700',
      justifyContent : 'center',
      color : '#CD5C5C'
    },
    topImage : {
      width : '100%',
      height : '60%'
    },
    image: {
      width : '95%',
      height : '100%',
      borderRadius: 10,
      margin : 10,
    }
});