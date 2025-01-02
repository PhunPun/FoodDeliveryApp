import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    Image
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
import { images } from "../../global/constants";

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view1}>
        <Text style={styles.text1}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.text1}>IN YOUR AREA</Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image 
                source={images.SignInWelcomeScreen1} 
                style={styles.image1} />
          </View>
          <View style={styles.slide2}>
            <Image 
                source={images.SignInWelcomeScreen2} 
                style={styles.image1} />
          </View>
          <View style={styles.slide3}>
            <Image 
                source={images.SignInWelcomeScreen3} 
                style={styles.image1} />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{ marginHorizontal: 20,}}>
            <Button
                title={'SIGN IN'}
                buttonStyle ={parameters.buttonStyle}
                titleStyle ={parameters.buttonTitleStyle}
                onPress={() => {
                  navigation.navigate("SignInScreen")
                }}
            />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Button 
                title={"Create your account"}
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    view1: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 20
    },
    text1: {
        fontSize: fonts.fontSizes.s3,
        color: colors.primary,
        fontWeight: fonts.fontWeights.w7,

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    image1: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
    },
    createButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        borderWidth: 1,
        borderColor: colors.button,
        height: 40,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: colors.button,
        fontSize: fonts.fontSizes.s8,
        fontWeight: fonts.fontWeights.w7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3
    }
})