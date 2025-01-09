import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text,
    Image, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable
} from "react-native";
import { 
    Icon, 
    Button, 
    SocialIcon,
} from "react-native-elements";
import * as Animatable from "react-native-animatable"
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../global/style.js";

export default function RestaurantCard({
    onPressRestaurantCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable ,
    discountPercent ,
    numberOfReview ,
    businessAddress ,
    farAway ,
    averageReview ,
    images,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...styles.cardView, width: screenWidth}}>
                <Image 
                    style={{...styles.cardImage, width: screenWidth}}
                    source={{uri: images}}
                />
                <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>
                <View style={styles.markerAndAdressView}>
                    <View style={styles.markerView}>
                    <Icon
                        type='material'
                        name='place'
                        color= {colors.grey2}
                        size ={fonts.fontSizes.s5}
                        iconStyle ={{
                            marginTop:3
                        }}
                    />
                    <Text style={styles.markerText}> {farAway} Km</Text>
                    </View>
                    <View style={styles.adressView}>
                        <View style={{width: 0.5, backgroundColor: colors.grey1}}/>
                        <Text style={styles.adressText}> {businessAddress} </Text>
                    </View>
                </View>
            </View>
            </View>
            
            <View style={styles.rateView}>
                <Text style={styles.rateText}>{averageReview}</Text>
                <Text style={styles.numberReviewText}> {numberOfReview} review</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 5,
    },
    cardImage: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
    },
    restaurantName: {
        fontSize: fonts.fontSizes.s8,
        fontWeight: fonts.fontWeights.w7,
        color: colors.grey1,  
        marginTop: 5,
        marginLeft: 10
    },
    markerAndAdressView: {
        flex: 1,
        flexDirection: 'row'
    },
    markerView: {
        flex:4,
        flexDirection:'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    markerText: {
        fontSize: fonts.fontSizes.s12,
        fontWeight: fonts.fontWeights.w7,
        paddingTop: 5,
        color: colors.grey3 
    },
    adressView: {
        flex: 9,
        flexDirection: 'row'
    },
    adressText: {
        fontSize: fonts.fontSizes.s12,
        color: colors.grey2,
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    rateView: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        right: 10,
        padding: 2, 
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
        backgroundColor: colors.rateBackground,
    },
    rateText: {
        color: colors.nomal,
        fontSize: fonts.fontSizes.s6,
        fontWeight: fonts.fontWeights.w7,
        marginTop:-3
    },
    numberReviewText: {
        color: colors.grey5,
        fontSize: fonts.fontSizes.s12,
        fontWeight: fonts.fontWeights.w4
    }
})