import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    TouchableOpacity,
    ScrollView
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
} from "../../global/style";
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen(){
    const [delivery, settDelivery] = useState(true)
    const [pickUp, setPickUp] = useState(false)
    return(
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.touchView}>
                <TouchableOpacity
                    onPress={()=> {
                        settDelivery(true)
                        setPickUp(false)
                    }}
                >
                    <View style={{
                        ...styles.deliveryTouch,
                        backgroundColor: 
                                delivery? colors.button: colors.grey5
                    }}>
                        <Text style={{
                            ...styles.deliveryText,
                            color: delivery? colors.nomal: colors.primary
                            }}>Delivery</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {
                        setPickUp(true)
                        settDelivery(false)
                    }}
                >
                    <View style={{
                        ...styles.deliveryTouch,
                        backgroundColor: 
                                pickUp? colors.button: colors.grey5
                    }}>
                        <Text style={{
                            ...styles.deliveryText,
                            color: pickUp? colors.nomal: colors.primary
                            }}>Pick Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginTop: 5}}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={styles.mapAndTimeView}>
                        <View style={styles.mapView}>
                            <Icon 
                                type="material-community"
                                name="map-marker"
                                color={colors.grey2}
                                size={26}
                            />
                            <Text style={styles.mapAndTimeText}>An Long Phu Giao</Text>
                        </View>
                        <View style={styles.timeView}>
                            <Icon 
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey2}
                                size={26}
                            />
                            <Text style={styles.mapAndTimeText}>Now</Text>
                        </View>
                    </View>
                    <View style={styles.fillterView}>
                        <Icon 
                            type="material-community"
                            name="tune"
                            color={colors.grey2}
                            size={26}
                        />
                    </View>
                </View>
                <View style={ styles.categoriView}>
                    <Text style={styles.categoriText}>Categories</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryTouch: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },
    deliveryText: {
        fontSize: fonts.fontSizes.s7,
        fontWeight: fonts.fontWeights.w1
    },
    touchView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    mapAndTimeView: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.grey5,
        borderRadius: 8,
        marginLeft: 10,
        marginTop: 5,
        paddingVertical: 5
    },
    mapView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    timeView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: colors.nomal,
        borderRadius: 15
    },
    mapAndTimeText: {
        marginLeft: 5,
        color: colors.grey2
    }, 
    fillterView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriView: {
        backgroundColor: colors.grey5,
        marginTop: 20,
        justifyContent: 'center',
        paddingVertical: 3
    },
    categoriText: {
        fontSize: fonts.fontSizes.s4,
        color: colors.grey2,
        fontWeight: fonts.fontWeights.w7,
        marginLeft: 20
    }
})