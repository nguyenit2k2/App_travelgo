import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function Moving() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Xe máy" component={Bike} />
        <Tab.Screen name="Ô tô" component={Car} />
      </Tab.Navigator>
    );
  }

function Bike(){
    return(
        <ScrollView style = {{ paddingBottom : 3 }}>
    <View style={styles.container}>
        <View style={styles.item}>
        <View style={styles.content}>
        <Text style={styles.name}>HONDA AIR BLADE</Text>  
        <Text style={styles.price}>120.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        <Image style={styles.Image} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/ab-5255.png"}}/>
        
        </View>

        <View style={styles.item}>
        <Image style={{width: '50%',height : 140, marginTop: 3}} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/bo-phu-kien-trang-tri-xe-vision-gay-an-tuong-manh-01-removebg-preview-5412.png"}}/>
        <View style={styles.content}>
        <Text style={styles.name}>HONDA VISION</Text>  
        <Text style={styles.price}>120.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        
        
        </View>

        <View style={styles.item}>
        <View style={styles.content}>
        <Text style={styles.name}>LEAD</Text>  
        <Text style={styles.price}>120.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        <Image style={styles.Image} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/lead-125--cao-cap_6_-removebg-preview-1024.png"}}/>
        
        </View>

        <View style={styles.item}>
        <Image style={styles.Image} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/wave-2569.png"}}/>
        <View style={styles.content}>
        <Text style={styles.name}>WAVE RSX</Text>  
        <Text style={styles.price}>100.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        
        
        </View>

        <View style={styles.item}>
        <View style={styles.content}>
        <Text style={styles.name}>SIRIUS</Text>  
        <Text style={styles.price}>100.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        <Image style={styles.Image} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/sirus-1424.png"}}/>
        
        </View>

        <View style={styles.item}>
        <Image style={styles.Image} source={{uri : "https://chothuexemaydn.com/thumb/550x400x1x90/upload/news/nvx-3780.png"}}/>
        <View style={styles.content}>
        <Text style={styles.name}>NVX 150</Text>  
        <Text style={styles.price}>170.000đ/Ngày</Text>  
        <Text style={styles.check}>Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 5 tiếng sẽ tính thêm 1 ngày.</Text>  
        </View>
        
        
        </View>
        <View style={{paddingBottom : 20}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Chi tiết liên hệ: chothuexemaydn.com</Text>
        </View>
    </View>
        
    </ScrollView>
     
    );
}


function Car(){
    return(
        <ScrollView style = {{ paddingBottom : 3 }}>
    <View style={styless.container}>
        <View style={styless.item}>
        <View style={styless.content}>
        <Text style={styless.name}>MAZDA 3</Text>  
        <Text style={styless.check}>Màu sắc: Đỏ</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 4 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text> 
        </View>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2021/02/thue-xe-mazda-3-tu-lai.jpg"}}/>
        
        </View>

        <View style={styless.item}>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2021/02/mazda3-mau-trang-1.jpg"}}/>
        <View style={styless.content}>
        <Text style={styless.name}>MAZDA 3</Text>  
        <Text style={styless.check}>Màu sắc: Trắng</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 4 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text>  
        </View>
        
        
        </View>

        <View style={styless.item}>
        <View style={styless.content}>
        <Text style={styless.name}>KIA CERATO</Text>  
        <Text style={styless.check}>Màu sắc: Bạc</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 4 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text>    
        </View>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2021/02/thue-xe-ceraton-4-cho.jpg"}}/>
        
        </View>

        <View style={styless.item}>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2021/02/elantra-hyundai-2.jpg"}}/>
        <View style={styless.content}>
        <Text style={styless.name}>KIA CERATO</Text>  
        <Text style={styless.check}>Màu sắc: Bạc</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 4 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text> 
        </View>
        
        
        </View>

        <View style={styless.item}>
        <View style={styless.content}>
        <Text style={styless.name}>KIA OPTIMA</Text>  
        <Text style={styless.check}>Màu sắc: Trắng</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 4 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text> 
        </View>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2020/07/xe-optima-4-cho-ngoi-1.jpg"}}/>
        
        </View>

        <View style={styless.item}>
        <Image style={styless.Image} source={{uri : "https://thuexetulaidanang.com/wp-content/uploads/2022/03/DSC0154-2048x1365.jpg"}}/>
        <View style={styless.content}>
        <Text style={styless.name}>MERCEDES E250</Text>  
        <Text style={styless.check}>Màu sắc: Trắng</Text> 
        <Text style={styless.check}>Số: Tự động</Text>
        <Text style={styless.check}>Loại xe: 5 chỗ</Text>
        <Text style={styless.check}>Thuê ngày: 3.800.000 VNĐ</Text>
        <Text style={styless.check}>Thuê tháng: Thương lượng</Text> 
        </View>
        
        
        </View>
        <View style={{paddingBottom : 20}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Chi tiết liên hệ: thuexetulaidanang.com</Text>
        </View>
    </View>
        
    </ScrollView>
    );
    
}
const styless = StyleSheet.create({
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
        textAlign : 'left'
    },
    item:{
        width: '100%',
        height : 230,
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center'
    },
    content:{
        justifyContent : 'center',
        width: '50%',
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    Image:{
         width: '48%',height : 160, marginTop: 3, borderRadius: 10
    },
    name:{
        fontSize: 20,
        fontWeight: '700',
        color: 'red', 
        textAlign : 'center',

    },
    price:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    },
    check: {
        fontSize: 14
    }
})
const styles = StyleSheet.create({
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
            textAlign : 'left'
        },
        item:{
            width: '100%',
            height : 230,
            flexDirection : 'row',
            alignItems :'center',
            justifyContent : 'center'
        },
        content:{
            justifyContent : 'center',
            width: '50%'
        },
        Image:{
             width: '48%',height : 160, marginTop: 3,
        },
        name:{
            fontSize: 20,
            fontWeight: '700',
            color: 'red', 
            textAlign : 'center',

        },
        price:{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16
        }
    })