import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import React from "react";
import {useState,useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import moment from 'moment';

const FlightResultScreen = () => {
  // Define an array with 10 elements, each with the required properties
  //

  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('/flight');
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
          
    
    }, []);

    for (let i = 0; i < data.length; i++) {
        const date = moment(data[i].dateTime).format('ddd MMM D YYYY');
        data[i].dateTime = date;
      }

      
  

  // The data array has 10 elements, each with the required properties

  const route = useRoute();
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    if (
      item.startPoint
        .toLowerCase()
        .includes(route.params.first.toLowerCase()) &&
      item.endPoint.toLowerCase().includes(route.params.second.toLowerCase())
    ) {
      if (item.startPoint === "") {
        
        return null;
      }
      return (
        <Pressable
          style={styles.items}
          onPress={() => {
            console.log(item);
            navigation.navigate("DetailFlight", item);
          }}
        >
          <Image
            style={{ width: 100, height: 70, resizeMode: "cover" }}
            source={{ uri: item.img }}
          />


          <View style={styles.detail}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.places}>
              {item.startPoint} to {item.endPoint}
            </Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <MaterialCommunityIcons
            style={styles.icon}
            name="airplane-marker"
            size={25}
            color="white"
          />
        </Pressable>
      );
    }
  };
  const getItemCount = (data) => {
    return data.length;
  };
  const getItem = (data, index) => {
    return data[index];
  };
  const keyExtractor = (item) => item.name;
  return (
    <View>
      <VirtualizedList
        data={data}
        renderItem={renderItem}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default FlightResultScreen;

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 5,
  },
  detail: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  timeText: {
    color: "#4eb09b",
    fontWeight: "500",
  },
  icon: {
    marginLeft: 40,
    backgroundColor: "#6c7ee1",
    padding: 7,
    borderRadius: 25,
  },
});