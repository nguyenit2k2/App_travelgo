import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect,useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmationScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const start = moment(route.params.startDate, 'YYYY-MM-DD');
    const end = moment(route.params.endDate, 'YYYY-MM-DD');
    const days = end.diff(start, 'days');
    const total = route.params.newPrice * days;
  
  const handleConfirm = async () => {
    try{
    const user = await AsyncStorage.getItem('user');
    const userData = JSON.parse(user);
    
    const data = {
      name:route.params.name,
      image:route.params.image,
      children: route.params.children,
      adults: route.params.adults,
      rating: route.params.rating,
      startDate: route.params.startDate,
      endDate: route.params.endDate,
      rooms: route.params.rooms,
      oldPrice: route.params.oldPrice,
      newPrice: route.params.newPrice,
      property_id : route.params.id,
      user_id: userData
    };
    
    // Gửi dữ liệu lên server
    axios.post('/save-tour', data)
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
    <View>
        <View style={{ alignItems: "center" }}>
          <Modal isVisible={isModalVisible} >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Booking successful!</Text>
        </View>
      </Modal>
            
            
        </View>
        <View>
          <Pressable style={{ backgroundColor: "white", margin: 10 }}>
            <View
              style={{
                marginHorizontal: 12,
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 7,
                  }}
                >
                  <AntDesign name="star" size={24} color="#ffd273" />
                  <Text>{route.params.rating}</Text>
                  <View
                    style={{
                      backgroundColor: "#01877e",
                      paddingVertical: 3,
                      borderRadius: 5,
                      width: 100,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      Genius Level
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#ffb0a9",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: "white", fontSize: 13 }}>
                  Travel sustainable
                </Text>
              </View>
            </View>

            <View
              style={{
                margin: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 60,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 3,
                  }}
                >
                  Check In
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#01877e",
                  }}
                >
                  {route.params.startDate}
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 3,
                  }}
                >
                  Check Out
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#01877e",
                  }}
                >
                  {route.params.endDate}
                </Text>
              </View>
            </View>

            <View
              style={{
                margin: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
              }}
            >
              <AntDesign name="user" size={24} color="#01877e" />
              <Text style={{ fontSize: 16 }}>
                {route.params.guests} guests
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: 12,
                marginTop: 20,
                borderBottomColor: "#e2e2e2",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            ></View>

            <View
              style={{
                margin: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Total</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                ${total}
              </Text>
            </View>
            <TouchableOpacity >
            <Pressable onPress={handleConfirm}>
              <Text
                style={{
                  backgroundColor: "#01877e",
                  color: "white",
                  padding: 10,
                  borderRadius: 5,
                  margin: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Book Now
              </Text>
              
            </Pressable>
            </TouchableOpacity>
          </Pressable>
          
        </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 25,
  },
});
export default ConfirmationScreen;