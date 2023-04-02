import * as React from 'react';
import { StyleSheet, Button,ScrollView, View, SafeAreaView, Text, Alert,TextInput,Image,Pressable, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import {ImageBackground} from 'react-native';
export default function Register({navigation}){
    
    return(
        <ScrollView>
        <ImageBackground
          source={require('../Image/background.png')}
          style={{ flex: 1,
            width: null,
            height: null,
            }}>
        <View style= {{ paddingTop : 50,  alignItems : 'center',
                justifyContent : 'center' }}>
            <View style={{ paddingTop: 30,paddingBottom : 10 }}>
            <View style={styles.containerlogo}>
            <View style={styles.logos}>
                <Text style={styles.TextLogo}>GO</Text>
            </View>
            <View>
            <Text style={styles.textTravel}>Travel</Text>
            </View>
            </View>
            <TextInput 
            style={styles.text}
            placeholder = 'User Name'/>
            {/* // onChangText={(text) => { setUsername(text) }} value={username}  */}
            </View>
            <View style={{ paddingBottom : 10 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Name'/>
            {/* // onChangText={(text) => { setName(text) }} value={name}  */}
            </View>
            <View style={{ paddingBottom : 10 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Email or phone'/>
            {/* // onChangText={(text) => { setInfo(text) }} value={info}  */}
            </View>
            <View style={{ paddingBottom : 25 }}>
            <TextInput 
            style={styles.text} 
            placeholder = 'Password'  />
            {/* // onChangText={(text) => { setPassword(text) }} value={password}  */}
            </View>
            <TouchableOpacity>
            <Pressable style={styles.button} >
            <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Register</Text>
            </Pressable>
            </TouchableOpacity>
            <Text style={{ paddingTop : 20, fontSize : 16, fontWeight : '600', color : '#CBC8D0' }}>Or register with</Text>
            </View>
            
            <View style ={{  justifyContent: 'center',
                                paddingTop : 5,
                                flex: 1,
                                margin: 10,
                                flexDirection: 'row',
                                }}>
            <Image  style={styles.logo} source={require('../Image/facebook.png')} />
            <Image  style={{width: 45,height: 45,borderRadius: 200 / 2, marginRight : 25 , marginLeft : 25 , borderWidth : 1.5,
        borderColor : '#8B8B8B'}}  source={require('../Image/instagram.png')} />
            <Image  style={styles.logo} source={require('../Image/google.png')} />
            </View>
            <View style={styles.register}>
                <Text style={styles.check}>Do you have account ? Login here !</Text>
                <Pressable style={styles.button} onPress={()=> navigation.navigate('Đăng Nhập')}>
                    <Text style={{ fontSize : 18, fontWeight : '700', color : '#fff' }}>Login</Text>
                </Pressable>
            </View>
                               
        
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerlogo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70
    },
    textTravel:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 9
    },
    logos: {
        backgroundColor: '#1A1818',
        width: 68,
        height: 68,
        borderRadius: 50
    },
    TextLogo:{
        color: '#31B2C4',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 17,
        fontSize: 20
    },

    logo:{
        width: 45,
        height: 45,
        borderRadius: 200 / 2,
        borderWidth : 1.5,
        borderColor : '#8B8B8B'
    },
    container: {
        flex : 1,
        backgroundColor : '#fff'
    },
    check: {
        paddingBottom: 15,
        fontSize : 16,
        
    },
    text: {
        color : '#333',
        borderRadius : 10,
        elevation: 5,
        
        paddingLeft : 20,
        width : 220,
        height : 40,
        fontWeight : '600',
        backgroundColor : '#fff',
    },
    image : {
        width : 200
    },
    button : {
        backgroundColor : '#333',
        width : 220,
        height : 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,
    },
    register: {
        alignItems: 'center',
        justifyContent : 'center',
        paddingBottom : 40
    }
})