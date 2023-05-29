import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import Header from "../Items/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";

const BookCar = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('/location');
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  const navigation = useNavigation();
  const [places, setPlaces] = useState();
  const [showList, setShowList] = useState(true);
  const handleTextInput = (text) => {
    setPlaces(text);
    setShowList(true);
  };
  const handlePressList = (item) => {
    setPlaces(item);
    setShowList(false);
  }
  const [seats , setSeats] = useState(0);


  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [selected, setSelected] = useState(0);
  const [selectedDates, setSelectedDates] = useState();
  
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  return (
    <>
      <Header />
      <SafeAreaView
        style={{
          borderColor: "#2dc3ac",
          borderWidth: 1,
          padding: 10,
          margin: 5,
          marginTop: 30,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2dc3ac",
            width: 150,
            position: "absolute",
            top: -20,
            left: 100,
          }}
        >
          <Text
            style={{ fontWeight: "600", marginHorizontal: 10, color: "white" }}
          >
            Car rental
          </Text>
          <FontAwesome5 name="car" size={24} color="white" />
        </View>
        <View style={styles.selectType}>
          <View style={[selected === 0 && styles.selectCurrent, styles.item]}>
            <Pressable onPress={() => setSelected(0)}>
              <Text style={styles.textSelect}>Self-driving</Text>
            </Pressable>
          </View>
          <View style={[selected === 1 && styles.selectCurrent, styles.item]}>
            <Pressable onPress={() => setSelected(1)}>
              <Text style={styles.textSelect}>Manned</Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderColor: "#2dc2ac",
            borderWidth: 1,
            paddingVertical: 15,
            margin: 5,
          }}
        >
          <Feather name="calendar" size={20} color="#2dc2ac" />
          <DatePicker
            style={{
              with: 360,
              height: 30,
              borderRadius: 0,
              borderWidth: 0,
              borderColor: "transparent",
            }}
            customeStyles={{
              placeholderText: {
                fontSize: 11,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
              },
              headerStyles: {
                backgroundColor: "#2D99ae",
              },
              contentText: {
                fontSize: 11,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
              },
            }}
            selectedBgColor="#2D99ae"
            customButton={(onConfirm) => customButton(onConfirm)}
            onConfirm={(startDate, endDate) =>
              setSelectedDates(startDate, endDate)
            }
            centerAlign // optional text will align center or not
            allowFontScaling={false} // optional
            placeholder={"May 30, 2023→May 31, 2023"}
            mode={"range"}
          />
        </Pressable>
        <View>
          <TextInput
            style={{
              borderColor: "#2dc2ac",
              borderWidth: 1,
              marginHorizontal: 4,
              padding: 10,
            }}
            placeholder="Enter your places ... "
            onChangeText={(text) => handleTextInput(text)}
            value={places}
          />
          {showList && (
            <FlatList
            style={{ zIndex: 1000, position: "absolute", top: 50,left:5 }}
              data={data}
              renderItem={({ item }) => {
                if (item.includes(places)) {
                  if (places === "") {
                    return null;
                  }
                  return (
                    <Pressable onPress={()=>handlePressList(item)} >
                      <View 
                       style={{
                            width: 200,
                            backgroundColor: "white",
                            paddingLeft: 15,
                            padding: 13,
                            borderBottomColor: "#4eb09b",
                            borderBottomWidth: 0.4,
                          }}>
                        <Text>{item}</Text>
                      </View>
                    </Pressable>
                  );
                }
              }}
            />
          )}
        </View>
        <View style={{flexDirection:'row',marginHorizontal:3,marginVertical:15}}>
          <Text style={{flex:2,fontSize:16}}>
            Number of seats : 
          </Text>
          <Text style={{flex:1,textAlign:'center',fontSize:16}} >{seats}</Text>
          <View  style={{flex:1,alignItems: 'center'}}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => setSeats(seats+1)}
        style={{marginHorizontal:15}}>
          <AntDesign name="pluscircle" size={24} color="black" />
          </Pressable>
          <Pressable  onPress={() => setSeats(Math.max(0,seats-1))}
          style={{marginHorizontal:15}}>
            <AntDesign name="minuscircle" size={24} color="black" />
          </Pressable>
        </View>
          </View>
        </View>
        <Pressable
        onPress={()=>{navigation.navigate('CarResult',{
          select : selected,
          places : places,
          startDay : selectedDates.startDate,
          endDay : selectedDates.endDate,
          seats : seats
        })}}
        style={{backgroundColor:"#4eb09b",marginHorizontal:5,marginTop:10}}>
       
          <View style={{flexDirection: "row",marginVertical:20,alignItems: "center",justifyContent: "center"}}>
         
            <Text style={{marginHorizontal:5,fontSize:20,fontWeight: "500"}}>
              Find 
            </Text>
            <FontAwesome5 name="dragon" size={24} color="black" />
          </View>
        </Pressable>
      </SafeAreaView>
      <View>
        <Image style={{width: "100%",height: "60%",marginVertical:20}}
         source={{uri : "https://www.driving.co.uk/wp-content/uploads/sites/5/2021/05/BMA-AI-art-car-05.jpg"}}/>
      </View>
    </>
  );
};

export default BookCar;

const styles = StyleSheet.create({
  selectType: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectCurrent: {
    backgroundColor: "#2dc3ac",
  },
  item: {
    marginHorizontal: 1,
    padding: 7,
    borderRadius: 3,
    borderColor: "#2dc3ac",
    borderWidth: 1,
    flex: 1,
  },
  textSelect: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});