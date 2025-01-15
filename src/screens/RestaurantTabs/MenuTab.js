import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    Image,
    TouchableOpacity,
    FlatList
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
import { menuData, specialData, menuDetailedData } from "../../global/Data";
import MenuCard from "../../components/MenuCard";
export const Route1 = () =>{
    return (
      <View style={{flex: 1}}>
        <View style={styles.view2}>
          <FlatList
            style={{backgroundColor: 'white'}}
            data={menuDetailedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PreferenceScreen', {index});
                }}>
                <MenuCard
                  productName={item.meal}
                  image={item.image}
                  price={item.price}
                  productDetails={item.details}
                />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
}
export const Route2 = ()=>(<View style = {styles.scene}/>)
export const Route3 = ()=>(<View style = {styles.scene}/>)
export const Route4 = ()=>(<View style = {{...styles.scene,backgroundColor:"green"}}/>)
export const Route5 = ()=>(<View style = {styles.scene}/>)
export const Route6 = ()=>(<View style = {styles.scene}/>)
export const Route7 = ()=>(<View style = {styles.scene}/>)
export const Route8 = ()=>(<View style = {styles.scene}/>)

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7',
    },
    view2: {
        marginTop: 5, 
        paddingBottom: 20
    },
    scene2: {
        backgroundColor: '#673ab7'
    },
});