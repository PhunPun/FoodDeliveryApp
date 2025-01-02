import React from "react";
import { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable"

import { 
    colors, 
    parameters, 
    titles, 
    fontSizes,
    fontWeights 
} from "../../global/style";
import Header from "../../components/Header";
export default function SignInScreen(){
    const [textInput2Fossuse, setTextInput2Fossuse] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    return(
        <View style={styles.container}>
            <Header title={'My account'} type={'arrow-left'}/>
            <View style={{marginLeft: 20, marginTop: 10}}>
                <Text style={titles}>Sign In</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10}}>
                <Text style={styles.text1}>Please enter the email and password</Text>
                <Text style={styles.text1}>register with your account</Text>
            </View>
            <View style={{marginTop: 20}}>
                <View>
                    <TextInput 
                        style={styles.textInput1}
                        placeholder="Email"
                        ref={textInput1}
                    />
                </View>
                <View style={styles.textInput2}>
                    <Animatable.View animation={textInput2Fossuse ? "": "fadeInLeft"} 
                            duration={400}>
                        <Icon 
                            name ={'lock'}
                            iconStyle={{color: colors.grey3}}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        style={{flex: 1}} 
                        placeholder="Password"
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Fossuse(false)
                        }}
                        onBlur={() => {
                            setTextInput2Fossuse(true)
                        }}
                    />
                    <Animatable.View animation={textInput2Fossuse ? "": "fadeInLeft"} 
                                duration={400}>
                        <Icon 
                            name ={"visibility-off"}
                            iconStyle={{color: colors.grey3}}
                            type="material"
                            style={{marginRight: 10}}
                        />
                    </Animatable.View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: fontSizes.s8,
        fontWeight: fontWeights.w1
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

})