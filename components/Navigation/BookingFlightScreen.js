import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { useState,useEffect } from "react";
  import axios from "axios";
  import Header from "../Items/Header";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { FlatList } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import DateTimePicker from "@react-native-community/datetimepicker"
  const BookFlightScreen = () => {
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
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(true);
    const sethandleFirst = (text) => {
      setFirst(text);
      setShowFirst(true);
    };
    const setHandldValueFisrt = (item) => {
      setFirst(item);
      setShowFirst(false);
    };
    const sethandleSecond = (text) => {
      setSecond(text);
      setShowSecond(true);
    };
    const setHandldValueSecond = (item) => {
      setSecond(item);
      setShowSecond(false);
    };
    const convertHand = () => {
       let temp = first ;
        setFirst(second);
        setSecond(temp);
    }
    const [dateTime,setDateOfBirth] = useState();
    console.log(dateTime);
    const [date,setDate] = useState(new Date());
    const [showPicker,setShowPicker] = useState(false);
    const toggeleDatepicker = ()=>{
      setShowPicker(!showPicker); 
    }
    const onChange = ({type},selectedDate)=>{
  
      if(type== 'set'){
        const currentDate = selectedDate; 
        setDate(currentDate);
        if(Platform.OS === 'android'){
          toggeleDatepicker();
          setDateOfBirth(currentDate.toDateString());
        }
       
      }
      else{
        toggeleDatepicker();
      }
      
    }
  
    useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
  
  
    return (
      <>
        <Header />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={[
              styles.container,
              {
                borderColor: "#2dc2ac",
                borderWidth: 2,
                padding: 40,
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={[
                styles.item,
                { flexDirection: "row", backgroundColor: "#2dc2ac",padding:5,borderRadius:3 },
              ]}
            >
              <FontAwesome
                name="paper-plane"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={{fontWeight:"600",color: "white"}}>Flight Booking</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.title}>Date Time :</Text>
             {showPicker &&  <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
              
              />}
            {!showPicker &&  <Pressable onPress={toggeleDatepicker} >
             <TextInput
                style={styles.input}
                placeholder="Mon Jul 10 2023"
                value={dateTime}
                onChangeText={setDateOfBirth}             
                placeholderTextColor='#111'
                editable={false}
              />
             </Pressable>}
            </View>
            {/*============Set Start ============== */}
            <View style={styles.item}>
              <Text style={styles.title}>Starting point :</Text>
              <TextInput
                style={styles.input}
                value={first}
                onChangeText={(text) => sethandleFirst(text)}
              />
              {showFirst && (
                <FlatList
                  style={{ zIndex: 1000, position: "absolute", top: 80 }}
                  data={data}
                  renderItem={({ item }) => {
                    if (item.toLowerCase().includes(first.toLowerCase())) {
                      if (first === "") {
                        return null;
                      }
                      return (
                        <Pressable onPress={() => setHandldValueFisrt(item)}>
                          <View
                            style={{
                              width: 200,
                              backgroundColor: "white",
                              paddingLeft: 15,
                              padding: 13,
                              borderBottomColor: "#4eb09b",
                              borderBottomWidth: 0.4,
                            }}
                          >
                            <Text>{item}</Text>
                          </View>
                        </Pressable>
                      );
                    }
                  }}
                />
              )}
            </View>
            <View style={styles.convert}>
              <Pressable onPress={()=>convertHand()}>
                <AntDesign name="retweet" size={24} color="white" />
              </Pressable>
            </View>
            {/*============Set End ============== */}
            <View style={styles.item}>
              <Text style={styles.title}>Destination point :</Text>
              <TextInput
                style={styles.input}
                value={second}
                onChangeText={(text) => sethandleSecond(text)}
              />
              {showSecond && (
                <FlatList
                  style={{ zIndex: 1000, position: "absolute", top: 80 }}
                  data={data}
                  renderItem={({ item }) => {
                    if (item.toLowerCase().includes(second.toLowerCase())) {
                      if (second === "") {
                        return null;
                      }
                      return (
                        <Pressable onPress={() => setHandldValueSecond(item)}>
                          <View
                            style={{
                              width: 200,
                              backgroundColor: "white",
                              paddingLeft: 15,
                              padding: 13,
                              borderBottomColor: "#4eb09b",
                              borderBottomWidth: 0.4,
                            }}
                          >
                            <Text>{item}</Text>
                          </View>
                        </Pressable>
                      );
                    }
                  }}
                />
              )}
            </View>
            <Pressable onPress={()=>navigation.navigate('ResultFlight',{first,second,dateTime})}
             style={[styles.item, { flexDirection: "row" ,backgroundColor:"#2dc2ac",padding:10,borderRadius:5}]}>
              <FontAwesome
                name="search"
                size={24}
                color="white"
                style={[styles.icon]}
              />
              <Text style={{fontSize:15,fontWeight:"600",color:"white"}}>Search</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  };
  
  export default BookFlightScreen;
  
  const styles = StyleSheet.create({
    input: {
      width: 200,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 15,
      borderBottomColor: "#2dc2ac",
      borderBottomWidth: 1,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
    },
    item: {
      flexDirection: "column",
      marginBottom: 15,
    },
    title: {
      marginBottom: 5,
      fontSize: 15,
      fontWeight: "500",
      textDecorationLine: "underline"
    },
    icon: {
      marginRight: 10,
    },
    convert: {
      marginBottom: 10,
      backgroundColor:"#2dc2ac",
      padding:15,
      borderRadius:50,
  
    },
  });