import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import PropertyCard from "../Items/PropertyCard";
import axios from "axios";
import { FontAwesome5 } from '@expo/vector-icons';
const PlacesScreen = () => {
  const route = useRoute();
  
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('/bookingtour');
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#0c5776",
        height: 100,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const searchResult = data?.filter((item)=>item.place === route.params.place);
  return (
    <View>
       <Pressable  onPress = {()=>navigation.navigate("Map",{
        searchResults: searchResult
      })}
      style={{width:50,position: 'absolute',zIndex: 100,right:0,top:60,margin:10 ,backgroundColor:"#fe7240",alignItems: 'center',padding:4,borderRadius:10}}>
      <FontAwesome5 name="map-marked-alt" size={24} color="white" />
      <Text style={{color:"white"}}>Map</Text>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
      {data
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
