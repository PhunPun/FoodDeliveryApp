import React from "react";
import { View, Text, StyleSheet,StatusBar } from "react-native";
import { colors } from "./src/global/style";

import SignInScreen from "./src/screens/authScreens/SignInScreen";
export default function App(){
    return (
        <View style={style.container}>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={colors.statusBar}
            />
            <SignInScreen/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {flex: 1}
})