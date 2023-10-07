import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import HomeStackScreen2 from "./stacks/HomeStackScreen2";
import SettingsStackScreen from "./stacks/SettingsStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Usuario" //la primer vista sera el formulario de registro
       screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen}
         options={{
          tabBarIcon: ({focused})=>{
            return ( 
        <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  
            </View>
            )
          }
        }}
            />
        <Tab.Screen name="Usuario" component={HomeStackScreen2} 
        options={{
          tabBarBadge:1,
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}> 
               <FontAwesome name="user" size={24} color={focused ? "#16247d": "#111"} />
               
          </View>
            )
          }
        }}
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}> 
               <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
          </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
