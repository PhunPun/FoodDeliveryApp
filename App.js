import React from "react";

import { View, Text, StyleSheet,StatusBar } from "react-native";
import Header from "./src/components/Header";
import { colors } from "./src/global/style";
export default function App(){
    return (
        <View style={style.container}>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={colors.statusBar}
            />
            <Header title={'My account'}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {flex: 1}
})