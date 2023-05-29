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
export default function PlaceNavigation(){
    return(
        <Stack.Navigator>
        <Stack.Screen name="Quán ăn" component={Food} options={{headerShown : false}}/>
        <Stack.Screen name="Food" component={PostFood} options={{headerShown : false}}/>
        </Stack.Navigator>
        )
}

    
class Food extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            "foods":[]
        }
    }

    componentDidMount(){
        const url = '/contentfood';
        axios.get(url)
        .then(res=> {
            this.setState({
                foods : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
        
    }
    render(){
        const { foods } = this.state; 
        const { navigate } = this.props.navigation;
    return(
        
        
        <FlatList 
            data={foods}
            renderItem = {({ item }) => <TouchableOpacity onPress={()=> navigate('Food',{id :item.id}) }><ContentFood food={item} /></TouchableOpacity> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
       
    );
    }
}


function ContentFood (props){
    const { food } = props;
        return(
            
            <View style = {{ paddingBottom : 3 }}>
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri : food.image}}/>
            <Text style={styles.title}>{food.title}</Text>
            <Text style={styles.content}>{food.content}</Text>  
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
        height : 290,
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


function CP_Foods (props){
    const { CP_food } = props;
        return(
            <View style = {{ paddingBottom : 3 }}>
        <View style={styless.container}>
            <Text style={styless.title}>{CP_food.title}</Text>
            <Text style = {styless.place}>Địa chỉ: {CP_food.place}</Text>
            <Image style={styless.Image} source={{uri : CP_food.image}}/>
            <Text style={styless.content}>{CP_food.bigcontent}</Text>
            
            <View style= {{ alignItems: 'flex-start', paddingTop: 10}}>
            <Text style = {styless.timemoney}>- Giờ mở cửa: {CP_food.time}</Text>
            <Text style = {styless.timemoney}>- Giá tiền: {CP_food.price}</Text>
            </View>
        </View>
        </View>
        );
}

const styless = StyleSheet.create({
    timemoney:{
        fontSize: 16,
        paddingBottom : 10,
        textAlign : 'left',
        fontStyle : 'italic'
    },
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
    Image:{
         width : '100%',height : 250, marginTop: 3, borderRadius : 5, marginBottom: 5
    }
})

class PostFood extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "contentfoods":[]
        }
    }
    async componentDidMount(){
        // const { navigation } = this.props.getRoute();
        const id =  this.props.route.params.id;
        console.log(id);
        axios.get('/contentfood/'+ id)
        .then(res=> {
            this.setState({
                contentfoods : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { contentfoods} = this.state;

    return(
        <FlatList 
            data={contentfoods}
            renderItem = {({ item }) => <CP_Foods CP_food={item}/> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    )
    };
    }



