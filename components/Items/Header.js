import { Pressable, StyleSheet, Text, View } from "react-native";
import React ,{useState}from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


const Header = () => {
  const [active,setActive] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const handlePress =(index)=>{
   
   if(index === 0){
    navigation.navigate("Search")
   }else if (index ===1){
    navigation.navigate("BookFlight")
   }else if (index ===2){
    navigation.navigate("BookCar")
   }
    
  }
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{ width: "100%", height: 40, backgroundColor: "#2D99ae",}}
      ></View>
      <View style={styles.container}>
        <Pressable
          style={[
          route.name==="Search" && styles.currentButton,
            styles.item
          ]}
          onPress={()=>handlePress(0)}
        >
          <Ionicons name="bed-outline" size={30} color="white" />
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

        <Pressable style={[styles.item, route.name==="BookFlight" &&styles.currentButton]}
          onPress={()=>handlePress(1)}>
          <Ionicons name="ios-airplane-outline" size={30} color="white" />
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

        <Pressable style={[styles.item,route.name==="BookCar"&& styles.currentButton]}
          onPress={()=>handlePress(2)}>
          <Ionicons name="car-outline" size={30} color="white" />
          <Text
            style={{
              marginLeft: 4,
              fontWeight: "bold",
              color: "white",
              fontSize: 13,
            }}
          >
            Car rent
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D99ae",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding:5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentButton:{
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  }
});