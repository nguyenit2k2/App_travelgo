import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import axios from 'axios';

export default class HomeStay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "homestays":[]
        }
    }

    componentDidMount(){
        const url = '/homestay';
        axios.get(url)
        .then(res=> {
            this.setState({
                homestays : res.data
            })
        })
        .catch(error=> {
            console.error(error)
        })
    }
    render(){
        const { homestays } = this.state;
    return(
        
        
        <FlatList 
            data={homestays}
            renderItem = {({ item }) =><ContentHomeStay homestays={item} /> }
            keyExtractor = { (item) => '$(item.id)' }
            contentContainerStyle  = {{ paddingLeft : 3 , paddingRight : 3 }}
        />
       
    );
    }
}

function ContentHomeStay (props){
    const { homestays } = props;
        return(
            
            <View >
        <View style={styles.container}>
        <View style={styles.text}>
            <Text style={styles.title}>{homestays.id}. {homestays.title}</Text>
            <Text style={styles.content}>{homestays.content}</Text>  
            </View>
        
        <Image style={styles.Image} source={{uri : homestays.image}}/>
        <View style={styles.time}>
        <Text style={styles.contents}>Thông tin: </Text>
        <Text style={styles.content}>- Địa chỉ: {homestays.place}</Text>  
        <Text style={styles.content}>- Giá phòng: {homestays.price}</Text> 
        </View>
        </View>
        </View>
         
        );
}

const styles = StyleSheet.create({
    contents:{
        fontSize : 16,
        marginLeft : 3,
        marginRight : 2,
        justifyContent : 'center',
        fontWeight : '700'
    },
    time:{
        paddingTop: 10,
        paddingBottom: 10,
        width: '98%',
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    text:{
        width: '98%',
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    container:{
        alignItems : 'center',
        backgroundColor : '#fff',
        width : '100%',
    },
    title:{
        textTransform : 'uppercase',
        marginTop : 5,
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
         width: '100%',height : 170, marginTop: 3,borderRadius: 4
    }
})