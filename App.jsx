import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './android/app/src/screens/HomeScreens/HomeScreen';
import FavScreen from './android/app/src/screens/FavScreens/FavScreen';
import Categories from './android/app/src/screens/HomeScreens/Categories';
import UploadScreen from './android/app/src/screens/UploadScreens/UploadScreen';
import AboutScreen from './android/app/src/screens/AboutScreens/AboutScreen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Drawers from './android/app/src/screens/DrawerScreens/DrawerScreen';
import SearchBox from './android/app/src/screens/Search/SearchBar';


const App = () => {
  const Drawer = createDrawerNavigator();
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Recipe Book'
        screenOptions={({ navigation }) => ({
          swipeEnabled: true,
          swipeEdgeWidth: 20,
          gestureEnabled: true,
          /*drawerInactiveBackgroundColor: "#DCD7D1",
          drawerActiveBackgroundColor: "#F1CEC9",
          drawerActiveTintColor: "orange",
          
          //drawerContentStyle: {
          //  backgroundColor: '#ffa781'
          //},
          drawerType: 'back',
          drawerLabelStyle: {
            fontSize: hp(2),
            fontFamily: 'serif',
          },*/
          
          //drawerIcon:()=>{return(<Icon name='menu-fold' size={30}/>);},
          //headerShown:false,
          //headerTintColor:'orange',
          //headerTitleAlign:'center',
          //headerTransparent:1,
          /*headerStyle: {
            backgroundColor: '#ffa781',
          },*/
          //headerTitleAllowFontScaling:true,
          /*headerTitleStyle: {
            //fontSize: hp(4),
            //fontStyle: 'italic',
            //fontVariant: 'small-caps',
            textShadowColor:'red',
            textShadowRadius:1.5,
            textShadowOffset:{width:1,height:1},
            //lineHeight:2,
            //letterSpacing:2,
            //fontWeight:'400',
            
          },*/
          headerTitle: () => {
            return (
                <SearchBox />
            );
          },

          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: wp(4)}}>
                <Icon name='menu-fold' size={wp(7)} color={'black'}
                />
              </TouchableOpacity>
            );
          },

          headerRight: () => {
            return (

              <TouchableOpacity style={{ marginRight: wp(4) }} onPress={() => navigation.navigate("Favourites0")}>
                <Icon name='hearto' size={wp(7)} color={"black"}
                  backgroundColor={'white'}
                  selectionColor={'red'}
                />
              </TouchableOpacity>

            );
          },
        })}
        drawerContent={(props)=>
          <Drawers {...props}/>
        }
      >
        <Drawer.Screen name="Home0" component={HomeScreen} />
        <Drawer.Screen name="Favourites0" component={FavScreen} />
        <Drawer.Screen name="Categories0" component={HomeScreen} />
        <Drawer.Screen name="Upload Recipes" component={UploadScreen} />
        <Drawer.Screen name="About" component={AboutScreen}/>



      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
})

export default App;
