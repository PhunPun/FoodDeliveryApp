import React from "react";
import { useState, useRef, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    ImageBackground,
    Animated
} from "react-native";
import { 
    Icon, 
    Button, 
    SocialIcon,
    withBadge
} from "react-native-elements";
import * as Animatable from "react-native-animatable"
import { colors, fonts, parameters } from "../global/style";
import {restaurantsData } from "../global/Data";
const RestaurantHeader = ({navigation, id}) => {
    const [liked, setLiked] = useState(false)
    const [counter, setCounter] = useState(-2)
    const [visible, setVisible] = useState(false)
    const heart = 10
    const currentValue = new Animated.Value(1)

    const likeHander = () => {
        if(liked == false){
            setVisible(true)
        }
        setLiked(!liked)
        setCounter(heart)
    }

    useEffect(() => {
        if(liked == true){
            Animated.sequence([
                Animated.timing(currentValue, {
                    toValue: 3,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(currentValue, {
                    toValue: 2.5,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(currentValue, {
                    toValue: 3,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(currentValue, {
                    toValue: 2,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setVisible(false);
            });
        }
    },[liked])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: restaurantsData[id].images}}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              type="material-community"
              name="arrow-left"
              color={colors.primary}
              size={25}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.view3}>
            <Icon
              type="material"
              name={liked && heart == counter ? 'favorite' : 'favorite-border'}
              color="red"
              size={30}
              onPress={likeHander}
            />
          </View>
        </View>
        <View style={styles.view4}>
            {
                visible && (heart == counter) && 
                <Animated.View style={{transform:[{scale: currentValue}]}}>
                    <Icon
                        type="material"
                        name="favorite"
                        size={40}
                        color= 'red'
                    />
                </Animated.View>
            }
        </View>
      </ImageBackground>
    </View>
  );
}

export default RestaurantHeader

const styles = StyleSheet.create({
    container: {
        height: 150
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    view2: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.nomal,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    view3: {
        marginTop: 0,
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.nomal,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    view4: {
        marginTop: 0, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
});