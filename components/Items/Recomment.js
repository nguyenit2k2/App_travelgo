import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity ,ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Recomment(){
    return(
        <ScrollView style={styles.container}>
         
        <View style={styles.main}>
        <Text style={styles.title2}>1. Phương tiện di chuyển đến Đà Nẵng ?</Text>
        <Text style={styles.content}>Xe máy: phương tiện giao thông chính trong thành phố, giúp thuận lợi khám phá các địa điểm du lịch Đà Nẵng. Thuê xe tại khách sạn hoặc các điểm thuê xe máy trên địa bàn Đà Nẵng với mức giá dao động từ 50.000đ – 150.000/ 1 xe/ 1 ngày.{"\n"}{"\n"}Xe buýt: trong thành phố có nhiều tuyến xe buýt. Bạn nên xem trước lịch trình để bắt được đúng chuyến xe để đi đến nơi bạn muốn. {"\n"}{"\n"}Taxi: Sông Hàn, Tiên Sa, Mai Linh, Vinasun Green là những hãng taxi hoạt động ở Đà Nẵng. {"\n"}{"\n"}Grab: đây là hình thức giao thông mới nhất trong tất cả, xu hướng tất yếu của thời đại. Đi lại bằng grab là phương tiện tối ưu (so với xe ôm và taxi) vì tính minh bạch về giá cả và rẻ hơn nhiều.</Text>
        <Image source={{ uri: 'https://image.thanhnien.vn/w1024/Uploaded/2022/naejgz/2022_02_06/z3161302816093-754554b6716a1d2429acbfce592c4a42-3110.jpg    ' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Bến xe phía Bắc, Đà Nẵng (ảnh chụp)</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>2. Chỗ nghỉ ngơi khi du lịch Đà Nẵng?</Text>
        <Text style={styles.content}>Đi cùng những người thân thiết thì nhất định bạn phải chọn những khách sạn hoặc resort thoải mái. Đặc biệt là vị trí thuận lợi cho việc di chuyển, có nhiều dịch vụ đi kèm như khu vui chơi trẻ em, hồ bơi… để đảm bảo tất cả thành viên trong gia đình đều có không gian nghỉ ngơi và thư giãn tốt nhất có thể.{"\n\n"}Tùy theo nhu cầu, sở thích, kinh phí mà bạn chọn nơi lưu trú phù hợp. Có thể ở tại khách sạn hay homestay. Những khách sạn, resort nổi tiếng, càng nhiều sao thì dịch vụ càng chất lượng. Ngoài ra bạn vẫn có thể tìm thấy những khách sạn ít sao hơn, 1-3 sao nhưng vị trí thuận lợi, đầy đủ tiện nghi.

Ngoài ra, lưu trú tại homestay cũng là lựa chọn không tồi đấy. Bởi bạn sẽ được cung sống với dân địa phương, có sự gắn bó thân thiết, dễ dàng giao lưu.</Text>
        <Image source={{ uri: 'https://kingtravel.tv/images/seoworld/danang/Noi_lua_tru_tai_Da_Nang.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Nơi lưu trú tại Đà Nẵng</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>3. Tắm biển du lịch Đà Nẵng dịp hè</Text>
        <Text style={styles.content}>Đi tour du lịch Đà Nẵng bạn có nhiều sự lựa chọn về địa điểm thăm quan và nhiều khu du lịch có nhiều hoạt động vui chơi giải trí. Nhất là trong dịp hè, bạn không nên bỏ qua hoạt động tắm biển : Đầu tiên có lẽ phải nhắc tới la bãi biển Mỹ Khê – 1 trong những bãi biển đẹp nhất và quyến rũ nhất hành tinh. Bờ biển Mỹ Khê trải dài từ chân bán đảo Sơn Trà đến tận chân núi Ngũ Hành Sơn, tại đây có rất nhiều hoạt động giải trí thú vị tập trung đa số khách du lịch như: tắm biển, lướt ván, đi cano, dù bay…{"\n"}{"\n"}Ngoài bãi biển Mỹ Khê, du khách cũng có thể tham khảo thêm 1 số bãi biển khác của Đà Nẵng như: Bãi tắm Phạm Văn Đồng, Biển Bắc Mỹ An, Bãi tắm Non Nước nằm ngay dưới chân núi Ngũ Hành Sơn, bãi tắm Xuân Thiều…</Text>
        <Image source={{ uri: 'https://baodanang.vn/dataimages/201709/original/images1398222_a.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Bãi biển Mỹ Khê</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>4. Ăn uống ở đâu giá tiết kiệm nhất tại Đà Nẵng ?</Text>
        <Text style={styles.content}>Đà Nẵng không chỉ có cảnh đẹp mà còn có cả những đặc sản món ăn nổi tiếng, bạn có lưu lại những món ngon không thể bỏ qua trong hành trình khám phá Đà Nẵng như:  Mì quảng, Bánh tráng cuốn thịt heo 2 đầu da, Hải sản…. Ngoài những món đặc sản trên thì bạn có thể tham khảo thêm 1 vài cái tên mamg đặc trưng vùng miền như: Gỏi cá Nam ô, bún chả cá, bê thui cầu Mống, bún mắm…</Text>
        <Image source={{ uri: 'https://kinhnghiemdulichdn.com/wp-content/uploads/2018/08/7-min-3.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Đồ ăn Đà Nẵng (ảnh chụp)</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>5. Những lưu ý khi đi du lịch Đà Nẵng ? </Text>
        <Text style={styles.content}>Thời gian tốt để đến Đà Nẵng: nằm ở vùng duyên hải miền Trung Việt Nam, Đà Nẵng như cánh buồm căng gió đang vươn ra biển lớn và trở thành một điểm du lịch hấp dẫn. Nơi đây có khí hậu nắng ấm quanh năm, lượng khách du lịch đổ về đây từ tháng 4 đến tháng 9 rất đông. Vì vậy bạn nên chọn dịp này để được đắm mình trong dòng nước trong xanh, hay lặn biển khám phá vẻ đẹp mê hồn của rạn san hô quý hiếm là lời mời gọi từ biển cả khó ai từ chối được. Đừng quên bỏ túi những kinh nghiệm du lịch Đà Nẵng trước mỗi chuyến hành trình đến đây nhé!
        {"\n"}{"\n"}
        Vật dụng mang theo: quần jean, áo phông, quần soóc, váy đi dạo, kính râm, mũ, kem chống nắng, kem giữ ẩm…{"\n"}Và đừng quên đồ bơi nhé, vì đi du lịch biển mà…. chuẩn bị sức khỏe thật tốt để bơi, lặn biển nhé!{"\n"}{"\n"}
        Quà tặng: thịt bò khô, mực khô, các loại cá trong chợ Cồn, chợ Hàn. Tượng đá phong thủy Non Nước. Các loại bánh đặc sản, hãy mua nó tại các siêu thị đặc sản nhé! Tham khảo những đặc sản Đà nẵng nên mua về làm quà nhé!
        </Text>
        <Image source={{ uri: 'https://alsaharhoian.com/wp-content/uploads/2021/06/qua-luu-niem-da-nang-3-1024x683.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Khu đồ lưu niệm Đà Nẵng</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={{ width: '100%', height : 50 , justifyContent : 'center'}}>
        <Text style={{ textAlign : 'center', fontSize : 20, fontStyle: 'italic',fontWeight: '700'}}>Chúc các bạn có một chuyến đi vui vẻ </Text>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop : 3,
        backgroundColor : '#fff',
        width : '100%',
        height : '100%',
        paddingBottom : 10
    },
    bg:{
        width : '100%',
        height: 90,
        borderRadius : 10
    },
    main:{
        paddingTop: 8

    },
    image:{
         width: '100%', marginTop: 5, height : 200, marginBottom : 5
    },
    content: {
        fontSize: 16,
        paddingLeft : 7,
        paddingRight: 7
    },
    title2: {
        fontSize: 18,
        fontWeight: '700',
        paddingLeft : 7,
        paddingRight: 7
    },
    url: {
        paddingLeft : 7,
        paddingRight: 7,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingBottom : 4
    }
})