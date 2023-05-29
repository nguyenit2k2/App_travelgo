import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity,TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Navigation/HomeScreen';
import { useState } from 'react';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();
export default function RestaurantNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Nhà hàng" component={Restaurant} />
        <Stack.Screen name="Nhà hàng Đà Nẵng" component={PostRestaurant} />
        </Stack.Navigator>
        )
}

    
class Restaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "restaurants":[]
        }
    }
    componentDidMount(){
        const url = '/postrestaurant';
        axios.get(url)
        .then(res=> {
            this.setState({
                restaurants : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { restaurants } = this.state; 
        const { navigate } = this.props.navigation;
    return(
        <FlatList 
            data={restaurants}
            renderItem = {({ item }) => <TouchableOpacity onPress={()=> navigate('Nhà hàng Đà Nẵng', {id : item.id}) }><ContentRestaurant restaurants={item} /></TouchableOpacity> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    );
    }
}

function ContentRestaurant (props){
    const { restaurants } = props;
        return(
            
            <View style = {{ paddingBottom : 3 }}>
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri : restaurants.image}}/>
            <Text style={styles.title}>{restaurants.title}</Text>
            <Text style={styles.content}>{restaurants.content}</Text>  
        </View>
        </View>
         
        );
}

const styles = StyleSheet.create({
    container:{
        marginTop : 3,
        alignItems : 'center',
        backgroundColor : '#fff',
        elevation: 3,
        marginBottom : 3,
        width : '100%',
        height : 280,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    },
    title:{
        textTransform : 'uppercase',
        marginTop : 5,
        fontWeight : '700',
        fontSize : 20,
        textAlign : 'left'
    },
    content:{
        fontSize : 14,
        marginLeft : 3,
        marginRight : 2,
        justifyContent : 'center',
    },
    Image:{
         width: '100%',height : 150, marginTop: 3
    }
})

// Post Place


function CP_Restaurants (props){
    const { CP_Restaurant } = props;
        return(
            <View style = {{ paddingBottom : 3 }}>
        <View style={styless.container}>
            <Text style={styless.title}>{CP_Restaurant.title}</Text>
            <Text style = {styless.place}>Địa chỉ: {CP_Restaurant.place}</Text>
            <Image style={styless.Image} source={{uri : CP_Restaurant.image}}/>
            <Text style={styless.content}>{CP_Restaurant.bigcontent}</Text>
            
            <View style= {{ alignItems: 'flex-start', paddingTop: 10}}>
            <Text style = {styless.timemoney}>- Giờ mở cửa: {CP_Restaurant.time}</Text>
            <Text style = {styless.timemoney}>- Giá tiền: {CP_Restaurant.price}</Text>
            </View>
        </View>
        </View>
        );
}

const styless = StyleSheet.create({
    comment:{
        paddingTop: 20,
        backgroundColor : '#fff',
        width : '100%'
    },
    comments: {
        paddingLeft : 20,
        width : '100%',
        height : 60,
        fontWeight : '600',
         
    },
    container:{
        marginTop : 3,
        alignItems : 'center',
        backgroundColor : '#fff',
        elevation: 3,
        marginBottom : 3,
        width : '100%',
        height : '100%',
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    },
    title:{
        textTransform : 'uppercase',
        marginTop : 5,
        fontWeight : '700',
        fontSize : 20,
        paddingBottom : 10,
        paddingTop : 5
    },
    content:{
        marginLeft : 5,
        marginRight : 5,
        fontSize : 16,
        marginLeft : 3,
        marginRight : 2,
        justifyContent : 'center',
    },
    place:{
        fontSize: 13,
        fontWeight : '700',
        paddingBottom : 5
    },
    timemoney:{
        fontSize: 16,
        paddingBottom : 10,
        textAlign : 'left',
        fontStyle : 'italic'
    },
    Image:{
         width : '100%',height : 250, marginTop: 3, borderRadius : 5, marginBottom: 5
    }
})


class PostRestaurant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "contentrestaurants":[]
        }
        
    }
    
    async componentDidMount(){
        const id =  this.props.route.params.id;
        const url = '/postrestaurant/'+id;
        axios.get(url)
        .then(res=> {
            this.setState({
                contentrestaurants : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { contentrestaurants } = this.state;
    return(
        <FlatList 
            data={contentrestaurants}
            renderItem = {({ item }) => <CP_Restaurants CP_Restaurant={item}/> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    );
    }
}


