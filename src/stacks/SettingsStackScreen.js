import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen1 from "../screens/SettingsScreen1";

const SettingsStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen1} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
