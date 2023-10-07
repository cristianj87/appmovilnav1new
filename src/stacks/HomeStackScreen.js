import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
import HomeScreen3 from "../screens/HomeScreen3";
import HomeScreen4 from "../screens/HomeScreen4";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Bienvenido" component={HomeScreen1} />
      <HomeStack.Screen name="SII ITCJ" component={HomeScreen2} />
      <HomeStack.Screen name="WEB ITCJ" component={HomeScreen3} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
