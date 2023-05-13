import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const PropertyInfoScreen = () => {
  const route = useRoute();
 

  
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const diffrence = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(diffrence)/route.params.oldPrice) * 10;

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 7,
            alignItems: "center",
          }}
        >
          {route.params.photos.slice(0, 5).map((photo) => {
            return (
              <View style={{ margin: 7 }}>
                <Image
                  style={{ width: 100, height: 80, borderRadius: 4 }}
                  source={{ uri: photo.image }}
                />
              </View>
            );
          })}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show more
            </Text>
          </Pressable>
        </Pressable>
        <View style={{ marginHorizontal: 12 }}>
          <View>
            
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
            <Fontisto style={{ marginRight:10}}name="hotel-alt" size={20} color="#2d99ae" />
              {' '} {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <AntDesign name="star" size={24} color="#ffd273" />
              <Text style={{ marginLeft: 10 }}>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#2d99ae",
                  padding: 3,
                  borderRadius: 5,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 15 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        ></Text>
        
        <View style={{flexDirection:"row",marginTop:5,marginLeft:10 ,alignItems: "center"}}>
        <Fontisto name="paypal-p" size={24} color="#2d99ae" />
        <Text style={{marginLeft:13,marginTop:10 ,fontSize:16}}>
          Price for {route.params.rooms} room/day (Max : 3 people / 1 room):
        </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 18,
              textDecorationLine: "line-through",
            }}
          >
            ${route.params.oldPrice * route.params.rooms}
          </Text>
          <Text style={{ fontSize: 18 }}>
            {" "}
            Rs ${route.params.newPrice * route.params.rooms}
          </Text>
        </View>
        <View style={{marginHorizontal:12,marginTop:4,backgroundColor:"#ffd273",width:80,alignItems: "center",borderRadius:5,padding:5}}>
          <Text style={{color:"white",fontWeight:"600"}}>{offerPrice.toFixed(1)*10}% OFF</Text>
        </View>
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        ></Text>
        
        <View  style={{margin:12,flexDirection:"row",alignItems: "center" ,justifyContent: "center"}}>
        <Fontisto style={{marginRight:15}} name="date" size={24} color="#2d99ae" />
          <View>
            <Text style={{fontSize:18,fontWeight:"600"}}>Check In</Text>
            <Text style={{color:"#2d99ae",fontWeight:"500"}}>{route.params.selectedDates.startDate}</Text>
          </View>
          <MaterialIcons style={{marginHorizontal:40}} name="double-arrow" size={26} color="#2d99ae" />
          <View>
            <Text style={{fontSize:18,fontWeight:"600"}}>Check out</Text>
            <Text style={{color:"#2d99ae",fontWeight:"500"}}>{route.params.selectedDates.endDate}</Text>
          </View>
        </View>
        <View style={{marginLeft:20,flexDirection:"row",alignItems: "center"}}>
        <Ionicons style={{marginRight:13}}  name="people-circle" size={24} color="#2d99ae" />
       <View >
       <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#2d99ae" }}
            >
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
       </View>
        </View>
        
        <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
           <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View style={{alignItems: "center",justifyContent: "center"}}>
          <Pressable     onPress={() => navigation.navigate("User",{
        rooms:route.params.rooms,
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.selectedDates.startDate,
        endDate:route.params.selectedDates.endDate
      })}
        style={{
          backgroundColor: "#6CB4EE",
          bottom: 20,
          padding: 15,
          width:"95%",
          marginHorizontal:10,
        }}
      >
        <Text style={{ textAlign: "center", color: "white",fontWeight:"bold",fontSize:17 }}>
          Select Room
        </Text>
      </Pressable>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
