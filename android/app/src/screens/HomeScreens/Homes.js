import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MyCard from "./Cards";
import { SafeAreaView } from "react-native-safe-area-context";
import bgimg from "../../../../../assets/images/bg.jpg";

function Home() {
    const mainData = [{ id: 1., name: "Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    { id: 2, name: "masala Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    { id: 3, name: "chilli Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    { id: 2, name: "masala Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    { id: 3, name: "chilli Paneer", link: require('../../../../../assets/images/paneer.jpg') }, { id: 2, name: "masala Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    { id: 3, name: "chilli Paneer", link: require('../../../../../assets/images/paneer.jpg') },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={bgimg} resizeMode='repeat'>
                
            <FlatList
                data={mainData}
                numColumns={2}
                renderItem={(item) =>
                    <MyCard itemData={item}/>
                }
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Home;