import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";


function SearchBox() {

    const inputref=useRef(null);
    const [stext, setstext] = useState("");
    //const [svwidth, setsvwidth] = useState(68);
    //const [xicon, setxicon] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: "#ffefe1", width: wp(70), height: hp(6), alignItems: 'center', justifyContent: 'center', borderRadius: hp(5) }}>

            <View style={{ width: wp(68), height: hp(5), borderRadius: hp(5), flexDirection: 'row' }}>

                <View style={{ width: wp(stext!=''?58:68), height: hp(5), backgroundColor: "#FDFAF7", borderRadius: hp(5), flexDirection: "row" }}>

                    <View style={{ margin: wp(1), padding: wp(1), backgroundColor: "#ffefe1", borderRadius: hp(4), alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Icon name="search1" size={wp(6)} color={'grey'} />
                    </View>

                    <TextInput
                        ref={inputref}
                        placeholder="Search..."
                        placeholderTextColor={'grey'}
                        //onFocus={() => { setsvwidth(58); setxicon(true); }}
                        //onEndEditing={() => { setsvwidth(68); setxicon(false) }}
                        value={stext}
                        style={{ color: 'black', flex: 1 }}
                        onChangeText={(text) => { setstext(text); }}
                    />
                </View>

                {stext!="" ?
                    <View style={{ margin: wp(1), padding: wp(1), backgroundColor: "#FDFAF7", borderRadius: hp(7), alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="close" size={wp(6)} color={'grey'} onPress={() => {
                            setstext('');
                            inputref.current.blur();}} />
                    </View>
                    : null
                }

            </View>

        </SafeAreaView>
    );
}

export default SearchBox;