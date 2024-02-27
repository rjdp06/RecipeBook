import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function UploadScreen() {

    const [dname, setdname] = useState();
    const [shortDis, setshortDis] = useState();
    const [cal, setcal] = useState();
    const [time, settime] = useState();
    const [serves, setserves] = useState();

    return (
        <View style={{ flex: 1 }}>
            <Text>Dish Name : </Text>
            <TextInput
                placeholder="Enter Dish Name"
                value={dname}
                onChangeText={(text) => setdname(text)}
            />

            <Text>Short Discription : </Text>
            <TextInput
                placeholder="Enter Short discription..."
                value={shortDis}
                onChangeText={(text) => setshortDis(text)}
            />

            <Text>Calories : </Text>
            <TextInput
                placeholder="Enter calories count"
                value={cal}
                onChangeText={(text) => setcal(text)}
            />

            <Text>Approximate Time require : </Text>
            <TextInput
                placeholder="Enter time require"
                value={time}
                onChangeText={(text) => settime(text)}
            />

            <Text>Serves : </Text>
            <TextInput
                placeholder="No. of persion can be served ?"
                value={serves}
                onChangeText={(text) => setserves(text)}
            />

        </View>
    );
}

export default UploadScreen;