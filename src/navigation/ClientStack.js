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
import { 
    createNativeStackNavigator, 
    TransitionPresets 
} from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";

const ClientSearch = createNativeStackNavigator()
export function ClientStack(){
    return (
      <ClientSearch.Navigator>
        <ClientSearch.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <ClientSearch.Screen
          name="SearchResultScreen"
          component={SearchResultScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <ClientSearch.Screen
          name="RestaurantHomeScreen"
          component={RestaurantHomeScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </ClientSearch.Navigator>
    );
}

const styles = StyleSheet.create({

})