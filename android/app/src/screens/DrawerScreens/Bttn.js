import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";

function Btn(props) {
    return (
        <TouchableOpacity style={styles.btnMains}
            onPress={() => {
                props.navigation.navigate(props.goto);
                (props.jump) ? props.navigation.jumpTo(props.jump) : null;
            }}
        //onPress={()=>{props.go}}
        >
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Icon name={props.iname} color={'#65452B'} size={hp(2.3)} style={{ backgroundColor: "#FDFAF7", padding: '1.5%', borderRadius: hp(2.2), alignSelf: 'center', marginLeft: '3%' }} />
                <Text style={{ fontSize: hp(2.2), alignSelf: 'center', marginLeft: '3%', color: '#65452B', fontFamily: 'notoserif', fontVariant: 'small-caps', textTransform: 'uppercase' }}>{props.name}</Text>
                <View style={{ flex: 1 }}></View>
                <Icon name="right" size={hp(2)} color={'#65452B'} style={{ alignSelf: 'center' }} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnMains: {
        height: '5%',
        backgroundColor: "#ffefe1",
        marginHorizontal: '3%',
        justifyContent: 'center',
        borderRadius: hp(1),
        marginBottom: '3%'
    }
})

export default Btn;