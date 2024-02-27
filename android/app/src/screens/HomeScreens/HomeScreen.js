import React from "react";
import Home from "./Homes";
import Categories from "./Categories";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab=createMaterialTopTabNavigator();

function HomeScreen(){
    return(
        <Tab.Navigator
         screenOptions={{
          tabBarLabelStyle:{fontWeight:'bold'},
         }}
        >
          
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Categories" component={Categories}/>
        </Tab.Navigator>
    );
  }

export default HomeScreen;