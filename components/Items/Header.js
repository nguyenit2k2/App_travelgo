import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#0C5576",
        height: 85,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        paddingBottom: 20
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 10,
          padding : 4
        }}
      >
        <Ionicons name="bed-outline" size={20} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 13,
          }}
        >
          Stays
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
          
        }}
      >
       <Ionicons name="ios-airplane-outline" size={20} color="white" />
        <Text
          style={{
            marginLeft: 4,
            fontWeight: "bold",
            color: "white",
            fontSize: 13,
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
         
        }}
      >
        <Ionicons name="car-outline" size={20} color="white" />
        <Text
          style={{
            marginLeft: 4,
            fontWeight: "bold",
            color: "white",
            fontSize: 13,
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        
         
        }}
      >
        <FontAwesome5 name="uber" size={20} color="white" />
        <Text
          style={{
            marginLeft: 4,
            fontWeight: "bold",
            color: "white",
            fontSize: 13,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});