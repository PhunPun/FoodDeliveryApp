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
    Pressable,
    TouchableWithoutFeedback,
    ImageBackground
} from "react-native";
import { 
    Icon, 
    Button, 
    SocialIcon,
} from "react-native-elements";
import * as Animatable from "react-native-animatable"
import Countdown from 'react-native-countdown-component'
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../global/style";
import SearchComponent from "../components/SearchComponent";
import { filtterData } from "../global/Data";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen(){
    return(
        <View style={{flex: 1}}>
            <SearchComponent/>
            <View style={{marginTop: 10}}>
                <FlatList
                    style ={{marginBottom: 10}}
                    data={filtterData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableWithoutFeedback>
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={item.image}
                                >
                                    <View style={styles.textView}>
                                        <Text style={styles.nameText}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal ={false}
                    showsVerticalScrollIndicator = {false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>Top Category</Text>}
                    ListFooterComponent={<Footer/>}
                />
            </View>
        </View>
    )
}

const Footer = () => {
    return(
        <View style={{marginBottom:40, marginTop: 10}}>
            <FlatList
                style ={{marginBottom: 10}}
                data={filtterData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback>
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.image}
                                source={item.image}
                            >
                                <View style={styles.textView}>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal ={false}
                showsVerticalScrollIndicator = {false}
                numColumns={2}
                ListHeaderComponent={<Text style={styles.listHeader}>More Category</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageView: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
    },
    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10,
    },
    listHeader: {
        fontSize: fonts.fontSizes.s6,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12,
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.38)',
    },
    nameText: {
        color: colors.nomal,
        fontSize: fonts.fontSizes.s6,
        fontWeight: fonts.fontWeights.w7
    }
});