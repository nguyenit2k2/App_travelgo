import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from 'react';
import FindResult from "../Items/FindResult";
import axios from 'axios';
const FindScreen = () => {
    const [input,setInput] = useState("");
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
  return (
    <SafeAreaView style={{paddingTop:20}} >
    <View
      style={{
       
        padding: 10,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor:"#2D99ae",
        borderWidth:4,
        borderRadius:10
      }}
    >
      <TextInput value={input} onChangeText={(text)=>setInput(text)}   placeholder="Enter Your Destination" />
      <Feather name="search" size={22} color="black" />
    </View>

    <FindResult data={data} input={input} setInput={setInput}/>
  </SafeAreaView>
  )
}

export default FindScreen

const styles = StyleSheet.create({})