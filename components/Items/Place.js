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
        <Stack.Screen name="Top địa điểm" component={Place} />
        <Stack.Screen name="Bài viết" component={PostPlace} />
        </Stack.Navigator>
        )
}

    
class Place extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "places":[]
        }
    }

    componentDidMount(){
        const url = '/contentplace';
        axios.get(url)
        .then(res=> {
            this.setState({
                places : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { places } = this.state; 
        const { navigate } = this.props.navigation;
    return(
        
        
        <FlatList 
            data={places}
            renderItem = {({ item }) => <TouchableOpacity onPress={()=> navigate('Bài viết' ,{id : item.id}) }><ContentPlace place={item} /></TouchableOpacity> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
       
    );
    }
}

function ContentPlace (props){
    const { place } = props;
        return(
            
            <View style = {{ paddingBottom : 3 }}>
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri : place.image}}/>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.content}>{place.content}</Text>  
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


function CP_Places (props){
    const { CP_place } = props;
        return(
            <View style = {{ paddingBottom : 3 }}>
        <View style={styless.container}>
            <Text style={styless.title}>{CP_place.title}</Text>
            <Text style = {styless.place}>Địa chỉ: {CP_place.place}</Text>
            <Image style={styless.Image} source={{uri : CP_place.image}}/>
            <Text style={styless.content}>{CP_place.bigcontent}</Text>
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


class PostPlace extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            "contentplaces":[]
        }
        
    }
    
    async componentDidMount(){
        const id =  this.props.route.params.id;
        axios.get('/contentplace/'+ id)
        .then(res=> {
            this.setState({
                contentplaces : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { contentplaces } = this.state;
        
    return(
        <FlatList 
            data={contentplaces}
            renderItem = {({ item }) => <CP_Places CP_place={item}/> }
            keyExtractor = { (item) => '$(item.place_id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
    );
    }
}


