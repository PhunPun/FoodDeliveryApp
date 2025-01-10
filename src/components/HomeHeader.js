import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput
} from "react-native";
import { 
    Icon, 
    Button, 
    SocialIcon,
    withBadge
} from "react-native-elements";
import * as Animatable from "react-native-animatable"
import { colors, fonts, parameters } from "../global/style";

export default function HomeHeader({navigation}){
    const BadgeIcon = withBadge(0)(Icon)
    return (
      <View style={styles.header}>
        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.nomal}
            size={32}
            onPress={() => {
              navigation.toggleDrawer()
            }}
          />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>PhunFood</Text>
        </View>
        <View style={styles.view1}>
          <BadgeIcon
            type="material-community"
            name="cart"
            size={32}
            color={colors.cardbackground}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: parameters.headerHeight,
        backgroundColor: colors.header,
        flexDirection: 'row'
    },
    view1:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15
    },
    view2:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        flex: 1
    },
    text1: {
        color: colors.headerText,
        fontSize: fonts.fontSizes.s5,
        fontWeight: fonts.fontWeights.w4,

    }
})