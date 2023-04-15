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
export default function HotelNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Khách sạn" component={Hotel} />
        <Stack.Screen name="PostHotel" component={PostHotel} />
        </Stack.Navigator>
        )
}

    
class Hotel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "hotels":[]
        }
    }

    componentDidMount(){
        const url = '/hotel';
        axios.get(url)
        .then(res=> {
            this.setState({
                hotels : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { hotels } = this.state; 
        const { navigate } = this.props.navigation;
    return(
        
        
        <FlatList 
            data={hotels}
            renderItem = {({ item }) => <TouchableOpacity onPress={()=> navigate('PostHotel',{id : item.id}) }><ContentHotel hotels={item} /></TouchableOpacity> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
       
    );
    }
}

function ContentHotel (props){
    const { hotels } = props;
        return(
            
            <View style = {{ paddingBottom : 3 }}>
        <View style={styles.container}>
        <Image style={styles.Image} source={{uri : hotels.image}}/>
        <View style={styles.text}>
            <Text style={styles.title}>{hotels.title}</Text>
            <Text style={styles.content}>{hotels.content}</Text>  
            </View>
        </View>
        </View>
         
        );
}

const styles = StyleSheet.create({
    text:{
        width: '48%',
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    container:{
        alignItems : 'center',
        backgroundColor : '#fff',
        elevation: 3,
        marginBottom : 3,
        width : '100%',
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
        flexDirection:'row'
    },
    title:{
        textTransform : 'uppercase',
        fontWeight : '700',
        fontSize : 16,
        textAlign : 'left'
    },
    content:{
        fontSize : 14,
        marginLeft : 3,
        marginRight : 2,
        justifyContent : 'center',
    },
    Image:{
         width: '50%',borderRadius: 10,marginTop: 1,marginBottom: 1,height: 170
    }
})

// Post Place


function CP_Hotels (props){
    const { CP_Hotel} = props;
        return(
            <View style = {{ paddingBottom : 3 }}>
        <View style={styless.container}>
        
            <Text style={styless.title}>{CP_Hotel.title}</Text>
            <Text style = {styless.place}>Địa chỉ: {CP_Hotel.place}</Text>
            <Image style={styless.Image} source={{uri : CP_Hotel.image}}/>
            <Text style={styless.content}>{CP_Hotel.bigcontent}</Text>
            
            <View style= {{ alignItems: 'flex-start', paddingTop: 10}}>
            <Text style = {styless.timemoney}>Giá tiền: {CP_Hotel.price}</Text>
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
        fontWeight : '700',
        paddingBottom : 10,
        textAlign : 'left'
    },
    Image:{
         width : '100%',height : 250, marginTop: 3, borderRadius : 5, marginBottom: 5
    }
})


class PostHotel extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            "contenthotels":[]
        }
        
    }
    
    async componentDidMount(){
        const id =  this.props.route.params.id;
        console.log(id);
        axios.get('/hotel/' + id)
        .then(res=> {
            this.setState({
                contenthotels : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { contenthotels } = this.state;
        
    return(
        <FlatList 
            data={contenthotels}
            renderItem = {({ item }) => <CP_Hotels CP_Hotel={item}/> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    );
    }
}


