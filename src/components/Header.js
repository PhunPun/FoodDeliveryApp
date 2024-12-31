import React from "react";
import { colors, parameters } from "../global/style";
import { Icon } from "react-native-elements";

import { View, Text, StyleSheet, Dimensions } from "react-native";
export default function Header({title}){
    return(
        <View style={style.header}>
            <View style={{
                marginLeft: 10
            }}>
                <Icon
                    type="material-community"
                    name="arrow-left"
                    color={colors.headerText}
                    size={28}
                    onPress={()=>{}}
                />
            </View>
            <View>
                <Text style={style.headerText}>{title}</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 5
    }
})