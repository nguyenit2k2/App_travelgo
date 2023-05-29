import * as React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity ,ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Recomment(){
    return(
        <ScrollView style={styles.container}>
         
        <View style={styles.main}>
        <Text style={styles.title2}>1. Always pack a towel</Text>
        <Text style={styles.content}>It’s the key to successful galactic hitchhiking – and plain common sense. {"\n\n"}You never know when you will need it, whether it’s at the beach, on a picnic, or just to dry off after a shower.{"\n\n"} While many hostels offer towels, you never know if they will or not, and carrying a small towel won’t add that much weight to your bag.

Make sure it’s a lightweight, quick-drying towel since regular towels are too bulky and heavy (and they take a long time to dry). Dry Fox travel towels are my favorite (use the code “nomadicmatt” for 15% off your purchase)!</Text>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Zusammengelegte_Handt%C3%BCcher.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Towel</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>2. Use a small backpack/suitcase.</Text>
        <Text style={styles.content}>By purchasing a small backpack (I like something around 35/45 liters), you will be forced to pack light and avoid carrying too much stuff. {"\n\n"}Humans have a natural tendency to want to fill space. Even if you pack light initially but have lots of extra room in your bag, you’ll end up going “well, I guess I can take more” and fill that space.{"\n\n"} You’ll regret it later as you’ll be carrying around a bunch of stuff you don’t need as well as more weight on your shoulders.</Text>
        <Image source={{ uri: 'https://nomadicmatt.s3.amazonaws.com/2022/leve8.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Vali</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>3. Pack light</Text>
        <Text style={styles.content}>Write down a list of essentials, cut it in half, and then only pack that! Plus, since you bought a small backpack like I said above, you won’t have much room for extra stuff anyways! Take half the clothes you think you will need…you won’t need as much as you think. It’s OK to wear the same t-shirt a few days in a row.{"\n\n"}

I love Unbound Merino, as their travel clothing can be worn daily for weeks without getting smelly. They are super light and they look sylish too. I really love the material, they’re comfortable, they hardly ever need a wash, and they last forever!</Text>
        <Image source={{ uri: 'https://media.nomadicmatt.com/altpackingmatt_001.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Pack light</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>4. But take extra socks</Text>
        <Text style={styles.content}>You’ll lose a bunch to laundry gremlins, wear and tear, and hiking so packing extra will come in handy. Take a few more than you need. Trust me on this. Nothing beats a fresh pair of socks!</Text>
        <Image source={{ uri: 'https://cdn.thewirecutter.com/wp-content/media/2020/12/compressionsocks-thumb-2048px.jpg?auto=webp&quality=75&crop=1.91:1&width=1200' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Take extra socks</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={styles.main}>
        <Text style={styles.title2}>5. Take an extra bank card and credit card with you</Text>
        <Text style={styles.content}>Disasters happen and things get stolen or hacked. I once had a card duplicated and a freeze put on it. {"\n\n"}I couldn’t use it for the rest of my trip. I was very happy I had a backup. You don’t want to be stuck somewhere new without access to your funds. This happened to a friend once and they had to borrow money for me for weeks while they waited for their new card to arrive.
        </Text>
        <Image source={{ uri: 'https://navi.com/blog/wp-content/uploads/2022/06/credit-card.jpg' }}  resizeMode="cover" style={styles.image} />
        <Text style={styles.url}>Take extra card</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#CECECE'}} />
        <View style={{ width: '100%', height : 50 , justifyContent : 'center'}}>
        <Text style={{ textAlign : 'center', fontSize : 20, fontStyle: 'italic',fontWeight: '700'}}>Have a nice trip</Text>
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