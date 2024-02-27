import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import foodbg from "../../../../../assets/images/foodbg.png";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Btn from "./Bttn";


function Drawers(props) {
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:"#FDFAF7"}}>
            <Image style={styles.foodbgs} source={foodbg}></Image>
            <Btn name="Home" iname="home" goto="Home0" navigation={props.navigation} 
            jump={"Home"} />
            <Btn name="Favourites" iname="heart" goto="Favourites0" navigation={props.navigation} />
            <Btn name="Categories" iname="appstore-o" goto="Home0" navigation={props.navigation} jump={"Categories"}/>
            <Btn name="About" iname="infocirlceo" goto="About" navigation={props.navigation} />
            {/*<Btn name="Home" iname="home" goto="Home0" navigation={props.navigation} />*/}
            
            <View style={{flex:1}}></View>

            <Text style={{alignSelf:'center',color:'grey',fontFamily:'serif'}}>v0.0.1</Text>
        </SafeAreaView>
    );
}

export default Drawers;

const styles = StyleSheet.create({
    foodbgs: {
        width: '94%',
        height: '22%',
        margin: '3%',
        borderRadius: hp(2),
        objectFit:'fill'
    }
})