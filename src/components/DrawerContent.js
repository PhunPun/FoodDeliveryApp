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
            contentContainerStyle={{padding: 0, margin: 0}}
        >
          <View style={{backgroundColor: colors.primary}}>
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
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <View>
                <View style={{
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginHorizontal: 10}}> 
                    <Text style={styles.numberText}>1</Text>
                    <Text style={styles.numTitleText}>My favorites</Text>
                </View>
              </View>
              <View>
                <View style={{
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginHorizontal: 10}}> 
                    <Text style={styles.numberText}>0</Text>
                    <Text style={styles.numTitleText}>Shoping cart</Text>
                </View>
              </View>
            </View>
          </View>
          <DrawerItemList {...props} />
          <DrawerItem 
            label = "Payment"
            icon={({color, size}) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                color={color}
                size={size}
              />
            )}
          />
          <DrawerItem 
            label = "Promotions"
            icon={({color, size}) => (
              <Icon
                type="material-community"
                name="tag-heart"
                color={color}
                size={size}
              />
            )}
          />
          <DrawerItem 
            label = "Setting"
            icon={({color, size}) => (
              <Icon
                type="material-community"
                name="cog-outline"
                color={color}
                size={size}
              />
            )}
          />
          <DrawerItem 
            label = "Help"
            icon={({color, size}) => (
              <Icon
                type="material-community"
                name="lifebuoy"
                color={color}
                size={size}
              />
            )}
          />
          <View style={styles.preferentsView}>
            <Text style={styles.preferentsText}>Preferences</Text>
            <View style={styles.switchView}>
              <Text style={styles.switchText}>Dark Theme </Text>
              <View>
                <Switch
                  trackColor={{true: colors.primary}}
                  thumbColor= "#f4f3f4"
                />
              </View>
            </View>
          </View>
        </DrawerContentScrollView>
        <DrawerItem 
            label = "Sign Out"
            icon={({color, size}) => (
              <Icon
                type="material-community"
                name="logout-variant"
                color={color}
                size={size}
              />
            )}
          />
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
    },
    numberText: {
      fontSize: fonts.fontSizes.s5, 
      fontWeight: fonts.fontWeights.w7, 
      color: colors.inPrimary
    },
    numTitleText: {
      color: colors.inPrimary, 
      fontSize: fonts.fontSizes.s10
    },
    preferentsView: {
      borderTopWidth: 0.5, 
      borderTopColor: colors.grey5,
      paddingTop: 10,
      paddingLeft: 20
    },
    preferentsText: {
      fontSize: fonts.fontSizes.s7,
      color: colors.grey3,
    },
    switchView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingTop: 10
    },
    switchText: {
      fontSize: fonts.fontSizes.s7,
      fontWeight: fonts.fontWeights.w4,
      color: colors.grey2,
    }
})