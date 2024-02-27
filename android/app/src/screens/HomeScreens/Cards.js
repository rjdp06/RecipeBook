import { Text } from "@rneui/base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Card } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";
//import  Icon  from "react-native-vector-icons/AntDesign";
import  Icon  from "react-native-vector-icons/Fontisto";


const MyCard = (props) => {
    return (
        <LinearGradient colors={["red", "orange", "white"]} style={styles.LGstyle}>
            <Card
                containerStyle={styles.cards}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="clock" size={hp(1.7)} color={'black'} style={{alignSelf:'center'}}/>
                    <Text style={{ width: '40%', fontFamily: 'notoserif',fontSize:hp(1.7) }}> 95 Min</Text>
                    <View style={{ flex: 1 }}></View>
                    <Icon name="fire" size={hp(1.7)} color={'black'} style={{alignSelf:'center'}}/>
                    <Text style={{ width: '34%', fontFamily: 'serif' ,fontSize:hp(1.7)}}>105 Cal</Text>
                </View>

                <Card.Image
                    style={styles.CImage}
                    source={props.itemData.item.link}
                />

                <Card.Divider />

                <Card.Title style={{ fontSize: hp(2.2), color: 'black', fontVariant: 'small-caps' }}>{props.itemData.item.name}</Card.Title>

            </Card>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    CImage: {
        marginBottom: hp(1),
        borderRadius: hp(4),
        objectFit:'contain',
    },
    LGstyle: {
        //backgroundColor: "#ffefe1",
        borderBottomLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        padding: hp(1),
        width: '48%',
        //height:hp(35),
        elevation: 5,
        margin: hp(0.7),
        justifyContent: 'center',
        alignItems: 'center',
        
        //flex:1,
    },
    cards: {
        backgroundColor: "#ffefe1",
        borderBottomStartRadius: 40,
        borderTopRightRadius: 40,
        padding: hp(1),
        width: '98%',
        //height:'90%',
        elevation: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:'center'
    },

});

export default MyCard;