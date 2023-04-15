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
export default function ShoppingNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Mua Sắm" component={Shopping} />
        <Stack.Screen name="PostShopping" component={PostShopping} />
        </Stack.Navigator>
        )
}

    
class Shopping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "shoppings":[]
        }
    }

    componentDidMount(){
        const url = '/shopping/';
        axios.get(url)
        .then(res=> {
            this.setState({
                shoppings : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { shoppings } = this.state; 
        const { navigate } = this.props.navigation;
    return(
        
        
        <FlatList 
            data={shoppings}
            renderItem = {({ item }) => <TouchableOpacity onPress={()=> navigate('PostShopping',{id : item.id}) }><ContentShopping shoppings={item} /></TouchableOpacity> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
       
    );
    }
}

function ContentShopping (props){
    const { shoppings } = props;
        return(
            
            <View style = {{ paddingBottom : 3 }}>
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri : shoppings.image}}/>
            <Text style={styles.title}>{shoppings.title}</Text>
            <Text style={styles.content}>{shoppings.content}</Text>  
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
        height : 295,
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


function CP_Shoppings (props){
    const { CP_Shopping } = props;
        return(
            <View style = {{ paddingBottom : 3 }}>
        <View style={styless.container}>
            <Text style={styless.title}>{CP_Shopping.title}</Text>
            <Text style = {styless.place}>Địa chỉ: {CP_Shopping.place}</Text>
            <Image style={styless.Image} source={{uri : CP_Shopping.image}}/>
            <Text style={styless.content}>{CP_Shopping.bigcontent}</Text>
            
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
    Image:{
         width : '100%',height : 250, marginTop: 3, borderRadius : 5, marginBottom: 5
    }
})


class PostShopping extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            "contentshoppings":[]
        }
        
    }
    
    async componentDidMount(){
        const id =  this.props.route.params.id;
        axios.get('/shopping/' + id)
        .then(res=> {
            this.setState({
                contentshoppings : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { contentshoppings } = this.state;
        
    return(
        <FlatList 
            data={contentshoppings}
            renderItem = {({ item }) => <CP_Shoppings CP_Shopping={item}/> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    );
    }
}


