import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable"
import Swiper from "react-native-swiper";
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../../global/style";
import { menuData, specialData } from "../../global/Data";

const MenuScreen = ({navigation, restaurant}) => {
  const handlePress = () => {
    //navigation.navigate("ProductScreen")
  };
  return (
    <View style={styles.container}>
      <View>
        {specialData.map(item => (
          <View key={item.key} style={styles.view1}>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.view2}>
                <Icon
                    type="material-community"
                    name="star"
                    color= "gold"
                />
                <Text style={styles.text1}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        {menuData.map(item => (
          <View key={item.key} style={styles.view1}>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MenuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    view1: {
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5,
    },
    text1: {
        color: colors.grey3,
        fontSize: 18,
        fontWeight: 'bold',
    },
});