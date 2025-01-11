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
import SearchComponent from "../components/SearchComponent";

export default function SearchScreen(){
    return(
        <View style={{}}>
            <SearchComponent/>
        </View>
    )
}