import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable"
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../../global/style";
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen(){

    return(
        <View style={styles.container}>
            <HomeHeader/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})