import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import axios from "axios";

const CarResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // Define the car data array
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('/list-car');
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <View>
      <FlatList
        style={{ margin: 10 }}
        data={data}
        renderItem={({ item }) => {
          if (item.seats === route.params.seats && item.location_id.place===route.params.place) {
            if (route.params.seats === 0) {
              
              return null;
            }
            return (
              <Pressable 
              onPress={()=>navigation.navigate('CarDetail',{
                
                id : item.id,
                name : item.name,
                img : item.img,
                place : route.params.places,
                price : item.price,
                quantity : item.quantity,
                startDate : route.params.startDay,
                endDate : route.params.endDay,
                select : route.params.select,
                seats : route.params.seats
              }) }
                style={{
                  marginBottom: 10,
                  flexDirection: "row",
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 90, height: 50 }}
                    source={{ uri: item.img }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>
                      {item.name.length > 5 ? item.name.substr(0 , 5)+"..":item.name}
                    </Text>
                    <Text style={{ color: "gray" }}>
                      Quantity : {item.quantity}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "black",
                    padding:5,
                    marginVertical:5,
                    borderRadius:3
                  }}
                >
                  <Text style={{ color: "white" }}>${item.price}</Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default CarResultScreen;

const styles = StyleSheet.create({});