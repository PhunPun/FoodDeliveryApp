  import React from "react";
  import { useState, useRef } from "react";
  import { 
      View, 
      Text,
      Image, 
      StyleSheet, 
      Dimensions, 
      TextInput,
      TouchableOpacity,
      ScrollView,
      FlatList,
      Pressable
  } from "react-native";
  import { 
      Icon, 
    Button, 
    SocialIcon,
} from "react-native-elements";
import * as Animatable from "react-native-animatable"
import Countdown from 'react-native-countdown-component'
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../global/style";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import { ClientStack } from "./ClientStack";

const TabsOfAuth = createBottomTabNavigator()

export default function AuthTabs(){
    return (
      <TabsOfAuth.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerShown: false,
        }}>
        <TabsOfAuth.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon type="material" name="home" color={color} size={size} />
            ),
          }}
        />
        <TabsOfAuth.Screen
          name="ClientStack"
          component={ClientStack}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <Icon type="material" name="search" color={color} size={size} />
            ),
          }}
        />
        <TabsOfAuth.Screen
          name="MyOrderScreen"
          component={MyOrderScreen}
          options={{
            tabBarLabel: 'My order',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="material"
                name="view-list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <TabsOfAuth.Screen
          name="MyAccountScreen"
          component={MyAccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <Icon type="material" name="person" color={color} size={size} />
            ),
          }}
        />
      </TabsOfAuth.Navigator>
    );
}