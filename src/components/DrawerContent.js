import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    Linking,
    Pressable,
    Alert,
    Switch
} from "react-native";
import { 
    Icon, 
    Button, 
    SocialIcon,
    withBadge,
    Avatar,
} from "react-native-elements";
import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
 } from "@react-navigation/drawer";
import * as Animatable from "react-native-animatable"
import { colors, fonts, parameters } from "../global/style";

export default function DrawerContent(props){
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...props}
            style={{padding: 0, margin: 0}}
            contentContainerStyle={{padding: 0, margin: 0, backgroundColor: 'red'}}
        >
          <View style={styles.avatarView}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://i.pinimg.com/736x/0a/ca/76/0aca76a3a3281d5f73a3af4c130b6179.jpg',
              }}
            />
            <View style={{marginLeft: 5}}>
                <Text style={styles.nameText}>Phun nè</Text>
                <Text style={styles.emailText}>phun@gmail.com</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.nomal,
    },
    avatarView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingLeft: 20,
        paddingVertical: 10,
        margin: 0,
        
    },
    nameText: {
        fontSize: fonts.fontSizes.s6,
        fontWeight: fonts.fontWeights.w7,
        color: colors.inPrimary
    },
    emailText: {
        fontSize: fonts.fontSizes.s10,
        fontWeight: fonts.fontWeights.w1,
        color: colors.inPrimary
    }
})