import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  VirtualizedList,
  Alert
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { PaymentRequest } from 'react-native-payments';
// import PayPal from 'react-native-paypal';
// import PayPalWrapper from 'react-native-paypal-wrapper';
import axios from "axios";

// import { PayPal } from 'react-native-paypal';


const CartScreen = () => {
  
  const navigation = useNavigation();
//   const PAYPAL_CLIENT_ID = 'AZJWscdramWjmopG1nH9I5vxaIjYFhOrKLLkBuVT8ZPoyRycFMvBhf2hpfLj4rIFaD4ucx2eR6RXD0cw';
//   const paymentRequest = new PaymentRequest({
//     countryCode: 'US',
//     currencyCode: 'USD',
//     supportedNetworks: ['visa', 'mastercard', 'amex'],
//     merchantCapabilities: ['supports3DS'],
//   });
  
//   PayPal.initialize(PAYPAL_CLIENT_ID, 'ENVIRONMENT');
//   const handlePayPalPress = async () => {
//     try {
//     const response = await PayPalWrapper.paymentRequest({
//     price: '10.00',
//     currency: 'USD',
//     description: 'Test Payment',
//     });
    
//     if (response.response.state === 'approved') {
//       // Thanh toán thành công
//     } else {
//       // Thanh toán thất bại
//     }
//     } catch (error) {
//     // Xử lý lỗi
//     }
//     };
//     const handlePaymentPress = async () => {
//       try {
//       const paymentData = {
//       id: 'payment_id',
//       paymentUrl: 'https://www.paypal.com/paymenturl',
//       payerId: 'payer_id',
//       paymentToken: 'payment_token',
//       returnUrl: 'https://www.returnurl.com',
//       };
//       const { paymentMethod, shippingAddress } = await paymentRequest.show();

// if (paymentMethod === 'https://paypal.com/pay') {
//   const response = await PayPalWrapper.paymentRequest({
//     price: '10.00',
//     currency: 'USD',
//     description: 'Test Payment',
//   });

//   if (response.response.state === 'approved') {
//     // Thanh toán thành công, thực hiện giao dịch với react-native-payments
//     const paymentDetails = {
//       id: response.response.id,
//       payerId: response.response.payerID,
//       paymentToken: response.response.paymentToken,
//       returnUrl: response.response.returnUrl,
//     };

//     // Thực hiện giao dịch với react-native-payments
//     const result = await paymentRequest.complete('success');
//   } else {
//     // Thanh toán thất bại, hủy thanh toán với react-native-payments
//     const result = await paymentRequest.complete('fail');
//   }
// } else {
//   // Thanh toán bằng phương thức khác, thực hiện giao dịch với react-native-payments
//   const result = await paymentRequest.complete('success');
// }
// } catch (error) {
//   // Xử lý lỗi
//   }
//   };
  // const handlePayPalPayment = async () => {
  //   try {
  //     const result = await PayPal.pay({
  //       amount: '10.00',
  //       currency: 'USD',
  //       description: 'Payment description',
  //     });
  //     // Xử lý thanh toán thành công
  //   } catch (error){
  //     console.log(error)// Xử lý lỗi thanh toán
  //   }
  // };
  const [bookingHotels, setbookingHotels] = useState([]);
    
    useEffect(() => {
      const fetchHotelData = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          const userData = JSON.parse(user);
          const result = await axios.get(`/booking-hotel/${userData}`);
          setbookingHotels(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchHotelData();
    }, []);
  const [bookingFlights, setBookingFlights] = useState([]);
    useEffect(() => {
        const fetchFlightData = async () => {
          try {
            const user = await AsyncStorage.getItem('user');
          const userData = JSON.parse(user);
            const result = await axios.get(`/booking-flight/${userData}`);
            setBookingFlights(result.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchFlightData();
      }, []);
  const [bookingCar, setBookingCar] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          const userData = JSON.parse(user);
          const result = await axios.get(`/booking-car/${userData}`);
          setBookingCar(result.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
  const [showListHotels, setShowListHotels] = useState(false);
  const [showListFlights, setShowListFlights] = useState(false);
  const [showListCar, setShowListCar] = useState(false);
  const showHotels = () => {
    if (selectedItem === null) {
      setShowListHotels(true);
      setShowListFlights(false);
      setShowListCar(false);
    } else {
      alert("Please close the current task!");
    }
  };
  const showFlights = () => {
    if (selectedItem === null) {
      setShowListHotels(false);
      setShowListFlights(true);
      setShowListCar(false);
    } else {
      alert("Please close the current task!");
    }
  };
  const showCar = () => {
    if (selectedItem === null) {
      setShowListHotels(false);
      setShowListFlights(false);
      setShowListCar(true);
    } else {
      alert("Please close the current task!");
    }
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  

  const renderFlightsItem = ({ item }) => {
    if (item == null) return null;
    return (
      <>
        <Pressable onPress={() => handleSelectItem(item)}>
          <View style={styles.itemList}>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: item.flight.img }} style={styles.imgItemList} />
            </View>
            <View style={styles.detailItemList}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {item.flight.name.length > 7
                    ? item.flight.name.substr(0, 7) + "..."
                    : item.flight.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                  ({item.flight.name})
                </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 13 }}>{item.flight.time}_{item.flight.dateTime}</Text>
            </View>
            <View style={styles.buttomItemList}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ${item.total}
              </Text>
            </View>
          </View>
        </Pressable>

        {selectedItem && selectedItem.id === item.id && showListFlights && (
          <View style={styles.desInfoItem}>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.flight.img }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.flight.name}
                </Text>
              </View>
              <Text>
              {item.flight.startPoint} - {item.flight.endPoint} 
              </Text>
              <Text>
              Time: {item.flight.time} - {item.flight.dateTime} 
              </Text>
              <Text>
              Adult: {item.Adult} - Children {item.Children} 
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                width: "100%",
                justifyContent: "center",
                padding: 5,
                bottom: 5,
              }}
            >
              <Pressable style={styles.detailButoon} >
                <Entypo name="paypal" size={24} color="white" />
                <Text style={{ color: "white" }}>Pay</Text>
              </Pressable>
              <Pressable
                onPress={() => handleCancelOrderFlight(item.id)}
                style={styles.detailButoon}
              >
                <Ionicons name="md-trash-bin" size={24} color="white" />
                <Text style={{ color: "white" }}>Cancel order</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedItem(null)}
                style={styles.detailButoon}
              >
                <Ionicons name="close-circle" size={24} color="white" />
                <Text style={{ color: "white" }}>close</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const renderHotelsItem = ({ item }) => {
    if (item == null) return null;
    return (
      <>
        <Pressable onPress={() => handleSelectItem(item)}>
          <View style={styles.itemList}>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: item.image }} style={styles.imgItemList} />
            </View>
            <View style={styles.detailItemList}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {item.name.length > 8
                    ? item.name.substr(0, 8) + "..."
                    : item.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                {item.name }
                </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 13 }}>
                {item.start_date}_{item.end_date}
              </Text>
            </View>
            <View style={styles.buttomItemList}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ${item.rooms * item.new_price}
              </Text>
            </View>
          </View>
        </Pressable>
        {selectedItem && selectedItem.id === item.id && showListHotels && (
          <View style={styles.desInfoItem}>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
              </View>
              <Text>
                Start Date : {item.start_date} 
              </Text>
              <Text>
                End Date: {item.end_date}
              </Text>
              <Text>
                Adult: {item.adult}
              </Text>
              <Text>
                Children: {item.children}
              </Text>
              <Text>
                Room: {item.rooms}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                width: "100%",
                justifyContent: "center",
                padding: 5,
                bottom: 5,
              }}
            >
              <Pressable style={styles.detailButoon}>
                <Entypo name="paypal" size={24} color="white" />
                <Text style={{ color: "white" }}>Pay</Text>
              </Pressable>
              <Pressable
                onPress={() => handleCancelOrderHotel(item.id)}
                style={styles.detailButoon}
              >
                <Ionicons name="md-trash-bin" size={24} color="white" />
                <Text style={{ color: "white" }}>Cancel order</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedItem(null)}
                style={styles.detailButoon}
              >
                <Ionicons name="close-circle" size={24} color="white" />
                <Text style={{ color: "white" }}>close</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const renderCarItem = ({ item }) => {
    if (item == null) return null;
    return (
      <>
        <Pressable onPress={() => handleSelectItem(item)}>
          <View style={styles.itemList}>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: item.img }} style={styles.imgItemList} />
            </View>
            <View style={styles.detailItemList}>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {item.name.length > 5
                    ? item.name.substr(0, 5) + "..."
                    : item.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 13, marginLeft: 5 }}>
                  ({item.place})
                </Text>
              </View>
            </View>
            <View style={styles.buttomItemList}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ${item.total}
              </Text>
            </View>
          </View>
        </Pressable>
        {selectedItem && selectedItem.id === item.id && showListCar && (
          <View style={styles.desInfoItem}>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
              </View>
              <Text>
                Time: {item.startDate} - {item.endtDate}
              </Text>
              <Text>
                Type: {item.type} Seat : {item.seats}
              </Text>
              <Text>
                Total : {item.total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                width: "100%",
                justifyContent: "center",
                padding: 5,
                bottom: 5,
              }}
            >
              <Pressable style={styles.detailButoon}>
                <Entypo name="paypal" size={24} color="white" />
                <Text style={{ color: "white" }}>Pay</Text>
              </Pressable>
              <Pressable
                onPress={() => handleCancelOrderCar(item.id)}
                style={styles.detailButoon}
              >
                <Ionicons name="md-trash-bin" size={24} color="white" />
                <Text style={{ color: "white" }}>Cancel order</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedItem(null)}
                style={styles.detailButoon}
              >
                <Ionicons name="close-circle" size={24} color="white" />
                <Text style={{ color: "white" }}>close</Text>
              </Pressable>
            </View>
          </View>
        )}
      </>
    );
  };
  const handleCancelOrderFlight = (itemId) => {
    
    
      // Gửi dữ liệu lên server
      axios.delete(`/delete-booking-flight/${itemId}`)
        .then(response => {
          if (response.data.success) {
            Alert.alert(Message,'Delete Success');
            window.location.reload()
          }
        })
        .catch(error => {
          window.alert(Message,'Delete Error');
          console.error(error);
        });
  } 

  const handleCancelOrderHotel = (itemId) => {
    axios.delete(`/delete-booking-hotel/${itemId}`)
        .then(response => {
          if (response.data.success) {
            Alert.alert('Delete Success');
          }
        })
        .catch(error => {
          window.alert('Delete Error');
          console.error(error);
        });
  };

  const handleCancelOrderCar = (itemId) => {
    axios.delete(`/delete-rentcar/${itemId}`)
        .then(response => {
          if (response.data.success) {
            navigation.navigate('Cart')
          }
        })
        .catch(error => {
          window.alert('Delete Error');
          console.error(error);
        });
  };

  const getItemCount = (data) => {
    return data.length;
  };
  const getItem = (data, index) => {
    return data[index];
  };
  const keyExtractor = (item) => item.id;

 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Cart",
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
      <View style={styles.container}>
        <View style={styles.itemCart}>
        <Pressable onPress={() => showHotels()} style={styles.tag}>
            <FontAwesome5 name="hotel" size={20} color="black"  style={ showListHotels && styles.textTitle} />
            <Text style={ showListHotels && styles.textTitle}>Hotels Cart</Text>
          </Pressable>
         
        </View>
        <View style={styles.itemCart}>
        <Pressable onPress={() => showFlights()} style={styles.tag}>
            <FontAwesome5 name="plane-departure" size={20} color="black" style={ showListFlights && styles.textTitle} />
            <Text style={ showListFlights && styles.textTitle}>Flights Cart</Text>
          </Pressable>
        </View>
        <View style={styles.itemCart}>
        <Pressable onPress={() => showCar()} style={styles.tag}>
            <Fontisto name="taxi" size={20} color="black" style={ showListCar && styles.textTitle}/>
            <Text style={ showListCar && styles.textTitle}>Re.Car Cart</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.listView}>    
      {showListHotels && (
            <VirtualizedList 
              data={bookingHotels}
              renderItem={renderHotelsItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
          {showListFlights && (
            <VirtualizedList
             style={[{ height: 380 },styles.listItem]}
              data={bookingFlights}
              renderItem={renderFlightsItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
          {showListCar && (
            <VirtualizedList
             style={[{ height: '100%'},styles.listItem]}
              data={bookingCar}
              renderItem={renderCarItem}
              getItemCount={getItemCount}
              getItem={getItem}
              keyExtractor={keyExtractor}
            />
          )}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container :{
   flexDirection:"row",
   width: "100%",
   alignItems: "center",
   justifyContent: "center",
   marginTop: 5,
  
  },
  itemCart :{
   flex:1,
  },
  tag :{
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center", 
  },
  textTitle:{
   color: "#4882bb",
   fontWeight: "bold",  
  },
  listView:{
  width: "100%",
  height: "90%",
  padding:10
  },
 
  itemList: {
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
    borderColor: "#a15d98",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor:"#fff",
  },
  imgItemList: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: "#4882bb",
    borderWidth: 1,
  },
  buttomItemList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4882bb",
    margin: 3,
    padding: 5,
    borderRadius: 3,
  },
  detailItemList: {
    flex: 2,
    overflow: "hidden",
    paddingVertical: 5,
  },
  desInfoItem: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    position: "relative",
    borderColor: "#e5cee0",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  detailButoon: {
    backgroundColor: "black",
    marginLeft: 15,
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
  },
});