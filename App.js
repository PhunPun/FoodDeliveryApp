import React from "react";
import { View, Text, StyleSheet,StatusBar } from "react-native";
import { colors } from "./src/global/style";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen";
import RootNavigator from "./src/navigation/RootNavigator";
export default function App(){
    return (
        <View style={style.container}>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={colors.statusBar}
            />
            <RootNavigator/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {flex: 1}
})