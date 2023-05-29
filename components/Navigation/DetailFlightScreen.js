import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect,useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Modal from 'react-native-modal';
const DetailFlightScreen = () => {
    const route = useRoute();
    const [adult,setAdult] = useState(1);
    const [children,setChildren] = useState(1);
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleConfirm = async () => {
      try{
      const user = await AsyncStorage.getItem('user');
      const userData = JSON.parse(user);
      
      const data = {
        adult : adult,
        children : children,
        total : route.params.price * (adult+children),
        flight_id: route.params.id,
        user_id: userData
      };
      
      // Gửi dữ liệu lên server
      axios.post('/save-flight', data)
        .then(response => {
          console.log(response.data);
          if (response.data.success) {
            toggleModal();
          }
        })
        .catch(error => {
          console.error(error);
        });
  } catch (error) {
    console.error(error);
  }
  };
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    useEffect(() => {
      if (isModalVisible) {
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "SearchScreen" }, { name: "Cart" }]
          });
        }, 2000);
      }
    }, [isModalVisible]);
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Confirmation",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#0c5776",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
      });
    }, []);
  return (
   <SafeAreaView>
    <View style={{ alignItems: "center" }}>
          <Modal isVisible={isModalVisible} >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Booking successful!</Text>
        </View>
      </Modal>
        </View>
      <View>
      <Image  style={{width:"99%",height:200}} source={{uri : route.params.img}}/>
      </View>
      <View style={styles.detail}>
      <View style={{flex:1,alignItems: 'center',backgroundColor:'black',justifyContent: 'center',margin:5,borderRadius:3}}>
        <Text style={{color:'white',fontWeight:'600'}}>Day Time :</Text>
      </View>
     <View style={{flex:1}}>
     <Text>{route.params.dateTime}</Text>
      <Text>{route.params.time}</Text>
     </View>

      </View>
      <View style={styles.byTicket}>
      <View >
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{flex:1,textAlign: 'center',fontSize:20,fontWeight:"600"}}>
            Adult ticket : 
          </Text>
          <Text style={{flex:1,textAlign: 'center',fontSize:18}}>
            {adult}
          </Text>
         <View style={{flex:1,flexDirection:'row'}}>
         <Pressable onPress={()=>setAdult(adult+1)} >
         <AntDesign name="pluscircle" size={22} color="black" style={{marginRight:45}} />
          </Pressable>
          <Pressable onPress={()=>setAdult(Math.max(0,adult-1))} >
          <AntDesign name="minuscircle" size={22} color="black" />
          </Pressable>
         </View>
        </View>
      </View>
      <View >
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{flex:1 ,textAlign: 'center',fontSize:20,fontWeight:"600"}}>
            Children ticket : 
          </Text>
          <Text style={{flex:1,textAlign: 'center',fontSize:18}}>
            {children}
          </Text>
         <View style={{flex:1,flexDirection:'row'}}>
         <Pressable onPress={()=>setChildren(children+1)} >
         <AntDesign name="pluscircle" size={22} color="black" style={{marginRight:45}} />
          </Pressable>
          <Pressable onPress={()=>setChildren(Math.max(0,children-1))} >
          <AntDesign name="minuscircle" size={22} color="black" />
          </Pressable>
         </View>
        </View>
        
      </View>
      </View>
      <View style={{alignItems: 'center',marginTop:15}}>
        <Text style={{fontSize:35,fontWeight:"400",textDecorationLine:"underline"}}> Total Price :</Text>
      </View>
      <View style={styles.totalPrice}>
         <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:30,fontWeight: 'bold'}}>${route.params.price * (adult+children)}</Text>
         </View>
         <Pressable style={{flex:1,backgroundColor:'black',margin:5}} onPress={handleConfirm}>
          <Text style={{fontSize:30,fontWeight: 'bold',color:'white',textAlign:'center'}}>Booking Now</Text>
         </Pressable>
      </View>
   </SafeAreaView>
  )
}



export default DetailFlightScreen

const styles = StyleSheet.create({
  detail:{
    flexDirection: 'row',
    margin:5
  },
  totalPrice:{
    flexDirection: 'row',
    marginTop:20,
    alignItems:'center',
    justifyContent: 'center'
  },
 
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 25,
  }
})