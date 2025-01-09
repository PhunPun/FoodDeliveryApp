import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable"

import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../../global/style";
import Header from "../../components/Header";
export default function SignInScreen({navigation}){
    const [textInput2Fossuse, setTextInput2Fossuse] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    return (
      <View style={styles.container}>
        <Header
          title={'My account'}
          type={'arrow-left'}
          navigation={navigation}
        />
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={titles}>Sign In</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.text1}>Please enter the email and password</Text>
          <Text style={styles.text1}>register with your account</Text>
        </View>
        <View style={{marginTop: 40}}>
          <View>
            <TextInput
              style={styles.textInput1}
              placeholder="Email"
              ref={textInput1}
            />
          </View>
          <View style={styles.textInput2}>
            <Animatable.View
              animation={textInput2Fossuse ? '' : 'fadeInLeft'}
              duration={400}>
              <Icon
                name={'lock'}
                iconStyle={{color: colors.grey3}}
                type="material"
              />
            </Animatable.View>
            <TextInput
              style={{flex: 1}}
              placeholder="Password"
              ref={textInput2}
              onFocus={() => {
                setTextInput2Fossuse(false);
              }}
              onBlur={() => {
                setTextInput2Fossuse(true);
              }}
            />
            <Animatable.View
              animation={textInput2Fossuse ? '' : 'fadeInLeft'}
              duration={400}>
              <Icon
                name={'visibility-off'}
                iconStyle={{color: colors.grey3}}
                type="material"
                style={{marginRight: 10}}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title={'SIGN IN'}
            buttonStyle={parameters.buttonStyle}
            titleStyle={parameters.buttonTitleStyle}
            onPress={() => navigation.navigate('AuthTabs')}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text
            style={{
              ...styles.text1,
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 30,
            marginTop: 30,
          }}>
          <View style={styles.view1}></View>
          <Text style={styles.text2}>OR</Text>
          <View style={styles.view1}></View>
        </View>
        <View style={{marginHorizontal: 10, marginTop: 20}}>
          <SocialIcon
            title="Sign in with Facebook"
            button
            type="facebook"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
          <SocialIcon
            title="Sign in with Google"
            button
            type="google"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text
            style={{
              ...styles.text1,
              textDecorationLine: 'underline',
            }}>
            New on PhunFood?
          </Text>
        </View>
        <View
          style={{alignItems: 'flex-end', marginHorizontal: 20, marginTop: 10}}>
          <Button
            title={'Create an account'}
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: fonts.fontSizes.s8,
        fontWeight: fonts.fontWeights.w1
    },
    text2: {
        color: colors.grey1,
        fontSize: fonts.fontSizes.s7,
        fontWeight: fonts.fontWeights.w7
    },
    textInput1:{
        borderWidth:1,
        borderColor: colors.grey4,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:16
    },
    textInput2:{
        borderWidth:1,
        borderColor: colors.grey4,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:16
    },
    view1: {
        height: 0.5,
        backgroundColor: colors.grey3,
        flex: 1,
        marginHorizontal: 20
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50
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