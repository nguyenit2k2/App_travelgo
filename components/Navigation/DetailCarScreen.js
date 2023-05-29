import {
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, {useState, useEffect, useLayoutEffect} from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import axios from 'axios';
  import Modal from 'react-native-modal';
  import moment from 'moment';
  const DetailCarScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const handleConfirm = async () => {
        try{
        const user = await AsyncStorage.getItem('user');
        const userData = JSON.parse(user);
        console.log(route)
        const data = {
          
          car_id: route.params.id,
          user_id: userData,
          startDate:route.params.startDate,
          endDate: route.params.endDate,
          select: route.params.select,
          total: route.params.price
        };
        
        // Gửi dữ liệu lên server
        axios.post('/save-car', data)
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
            navigation.navigate('Cart');
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
        <View style={styles.card}>
          {/**=================================================================== */}
          <View style={styles.imgView}>
            <Image
              source={{ uri: route.params.img }}
              style={{ width: "100%", height: 200 }}
            />
          </View>
          <View style={styles.virtual}></View>
          {/**===========================Detail======================================== */}
          <View style={styles.booking}>
            <View style={styles.title}>
              <View style={{flex: 2}}>
              <Text style={{ fontSize: 22, fontWeight: "700" }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  ${route.params.price}
                </Text>
                <Text>/day</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={16} color="#FFD700" />
                <AntDesign name="star" size={16} color="#FFD700" />
                <AntDesign name="star" size={16} color="#FFD700" />
                <AntDesign name="star" size={16} color="#FFD700" />
                <AntDesign name="star" size={16} color="#FFD700" />
                <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: 5 }}>
                  5.0
                </Text>
              </View>
             
              </View>
              <View style={{alignItems: "center",justifyContent: "center",flex:1}}>
              <Entypo style={{ }}name="new" size={60} color="black" />
              <Text>NEW</Text>
              </View>
            </View>
            <View style={styles.detialBooking}>
              <View style={styles.detialRent}>
                <View style={styles.item}>
                  <FontAwesome5 name="place-of-worship" size={24} color="black" />
                  <Text>Places : {route.params.place}</Text>
                </View>
                <View style={styles.item}>
                  <Entypo name="back-in-time" size={24} color="black" />
                  <Text>
                    {route.params.startDate} {route.params.endDate}
                  </Text>
                </View>
              </View>
              <View style={styles.detialRent}>
                <View style={styles.item}>
                  <MaterialCommunityIcons
                    name="seatbelt"
                    size={26}
                    color="black"
                  />
                  <Text>Seats : {route.params.seats}</Text>
                </View>
                <View style={styles.item}>
                  <MaterialCommunityIcons
                    name="steering"
                    size={24}
                    color="black"
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text style={route.params.select === 0 && styles.selected}>Self-driving</Text>
                    <MaterialCommunityIcons
                    style={route.params.select === 0 && styles.selected}
                      name="sticker-check"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={route.params.select === 1 && styles.selected}>Manned</Text>
                    <MaterialCommunityIcons
                    style={route.params.select === 1 && styles.selected}
                      name="sticker-check"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center", marginVertical: 25 }}>
            <Pressable style={{ backgroundColor: "black", padding: 10 }} onPress={handleConfirm}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }} >
                BOOK NOW
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default DetailCarScreen;
  
  const styles = StyleSheet.create({
    title: {flexDirection:'row',
     alignItems:'center'
        },
    virtual: {
      height: 30,
      width: "100%",
      backgroundColor: "white",
      position: "absolute",
      top: 170,
      borderTopRightRadius: 7,
      borderTopLeftRadius: 7,
    },
    card: {
      backgroundColor: "white",
      height: "100%",
    },
    booking: {
      marginHorizontal: 15,
    },
    detialRent: {
      flexDirection: "row",
      marginTop: 15,
    },
    item: {
      flex: 1,
      justifyContent: "center",
      borderColor: "#DCDCDC",
      borderWidth: 1,
      borderRadius: 5,
      alignItems: "center",
      marginHorizontal: 5,
      padding: 5,
    },
    selected:{
      color: "#2dc2ac"
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
  });