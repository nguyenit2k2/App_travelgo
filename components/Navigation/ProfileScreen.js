import React from 'react';
import {View, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
  const navigation =  useNavigation();
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          const userData = JSON.parse(user);
          const api = `/users/${userData}`;
          const result = await axios.get(api);
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    const Logout= async () =>{
      
      try{
        const user = await AsyncStorage.getItem('user');
        const userData = JSON.parse(user);
        const data = {
            user : userData
        }
        axios.post('/logout', data)
          .then(response => {
            if (response.data.success) {
              console.log('s')
              navigation.navigate('Login');
            }
          })
          .catch(error => {
            console.error(error);
          });
    } catch (error) {
      console.error(error);
    }
    }
  return (
    <SafeAreaView style={styles.container}>
           <View style={styles.userInfoSection}>
           <View style={{flexDirection:'row',marginTop:15}}>
           <Avatar.Image
            source={{
              uri:'https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_doge_dog.png'
            }}
            size={80}
           />
           <View style={{marginLeft:20}}>
                  <Title style={styles.title}>{data.name}</Title>
                  <Caption style={styles.caption}>@_Some</Caption>
           </View>
           </View>

           </View>
           <View style={styles.userInfoSection}>
           
                  <View style={styles.row}>
                  <AntDesign name="phone" size={22} color="gray" />
                        <Text style={{color: 'gray',paddingLeft:10,fontSize:15}}>+{data.phone}</Text>
                  </View>
                  <View style={styles.row}>
                  <MaterialIcons name="mark-email-read" size={22} color="gray"/>
                        <Text style={{color: 'gray',paddingLeft:10,fontSize:15}}>{data.email}</Text>
                  </View>
           </View>
           <View style={styles.infoBoxWrapper}>
           <View style={[styles.infoBox,{borderRightColor:"#dddddd",borderRightWidth:1}]}>
               <Title>$20 Tỏi</Title>
               <Caption>Đại gia đất</Caption>
           </View>
           <View style={styles.infoBox}>
              <Title> Ế Lâu Năm</Title>
              <Caption>Miễn là gái</Caption>
           </View>
           </View>
           <View style={styles.menuWrapper}>
           <Pressable onPress={() => {
            navigation.navigate('EditProfile',{
              data
            })
           }}>
          <View style={styles.menuItem}>
             <FontAwesome5 name="user-edit" size={24} color="#956ad6" />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </Pressable>  
        <Pressable onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialIcons name="payment" size={24} color="#956ad6" />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </Pressable>  
        <Pressable onPress={() => {}}>
          <View style={styles.menuItem}>
          <FontAwesome name="share" size={24} color="#956ad6" />
            <Text style={styles.menuItemText}>Share my firends</Text>
          </View>
        </Pressable>  
        <Pressable onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="history" size={24} color="#956ad6" />
            <Text style={styles.menuItemText}>History</Text>
          </View>
        </Pressable>  
        
          <View style={styles.menuItem}>
          <Entypo name="log-out" size={24} color="#956ad6" />
          <Pressable onPress= {Logout}>
            <Text style={styles.menuItemText}>Go out</Text>
            </Pressable>
          </View>   
           </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    flexDirection: 'column'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
   
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor:"#dddddd",
    borderBottomWidth:1,

  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});