import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Intro(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Du lịch Đà Nẵng là ứng dụng hỗ trợ các khách du lịch dễ dàng tham quan và vui chơi ở Đà Nẵng{"\n\n"}</Text>
            <Text style={{textAlign : 'center', fontWeight : '700', fontSize : 13}}>Copyright © 2022 by Hoang Nguyen 2K2</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width : '100%',
        height: '100%',
        justifyContent : 'center'
    },
    title:{
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: '600',
        marginBottom : 0,
        paddingLeft: 8,
        paddingRight: 8,
    },
    categoryImage:{
         width: 64,height : 64, marginTop: 10
    }

})