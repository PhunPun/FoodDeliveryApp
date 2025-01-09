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
import Countdown from 'react-native-countdown-component'
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../../global/style";
import HomeHeader from "../../components/HomeHeader";
import { filtterData, restaurantsData } from "../../global/Data";
import RestaurantCard from "../../components/RestaurantCard";

const cardResWidth = (Dimensions.get('window').width)*0.8
const cardAreaResWidth = (Dimensions.get('window').width)

export default function HomeScreen(){
    const [delivery, settDelivery] = useState(true)
    const [pickUp, setPickUp] = useState(false)
    const [indexCheck, setIndexCheck] = useState("0")

    return (
      <View style={styles.container}>
        <HomeHeader />
        <View style={styles.touchView}>
          <TouchableOpacity
            onPress={() => {
              settDelivery(true);
              setPickUp(false);
            }}>
            <View
              style={{
                ...styles.deliveryTouch,
                backgroundColor: delivery ? colors.button : colors.grey5,
              }}>
              <Text
                style={{
                  ...styles.deliveryText,
                  color: delivery ? colors.nomal : colors.primary,
                }}>
                Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPickUp(true);
              settDelivery(false);
            }}>
            <View
              style={{
                ...styles.deliveryTouch,
                backgroundColor: pickUp ? colors.button : colors.grey5,
              }}>
              <Text
                style={{
                  ...styles.deliveryText,
                  color: pickUp ? colors.nomal : colors.primary,
                }}>
                Pick Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop: 5}}>
          <View
            style={{
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
          <View style={{...styles.categoriView, marginTop: 20}}>
            <Text style={styles.categoriText}>Categories</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filtterData}
              keyExtractor={item => item.id}
              extraData={indexCheck}
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}>
                  <View
                    style={{
                      ...styles.smallCateView,
                      backgroundColor:
                        indexCheck === item.id ? colors.primary : colors.grey5,
                    }}>
                    <Image style={styles.smallCateImage} source={item.image} />
                    <View>
                      <Text
                        style={{
                          ...styles.smallCateText,
                          color:
                            indexCheck === item.id
                              ? colors.selected
                              : colors.doneSelect,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <View style={{...styles.categoriView, marginBottom: 10}}>
            <Text style={styles.categoriText}>Free delivery now</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.changingText}>Options changing in </Text>
                <Countdown 
                    until = {3600}
                    size = {14}
                    digitStyle = {{backgroundColor: colors.countDown}}
                    digitTxtStyle = {{color: colors.nomal}}
                    timeToShow = {['M', 'S']}
                    timeLabels ={{m: 'Min', s: 'Sec'}}
                />
            </View>
            <FlatList
                style={styles.restaurantFlaslist}
                horizontal ={true}
                showsHorizontalScrollIndicator ={false}
                data={restaurantsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <RestaurantCard
                            screenWidth = {cardResWidth}
                            images = {item.images}
                            restaurantName = {item.restaurantName}
                            numberOfReview = {item.numberOfReview}
                            businessAddress = {item.businessAddress}
                            farAway = {item.farAway}
                            averageReview = {item.averageReview}
                        />
                    </View>
                )}
            />
          </View>
          <View style={{...styles.categoriView}}>
            <Text style={styles.categoriText}>Promotions available</Text>
          </View>
          <View>
            <FlatList
                style={styles.restaurantFlaslist}
                horizontal ={true}
                showsHorizontalScrollIndicator ={false}
                data={restaurantsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <RestaurantCard
                            screenWidth = {cardResWidth}
                            images = {item.images}
                            restaurantName = {item.restaurantName}
                            numberOfReview = {item.numberOfReview}
                            businessAddress = {item.businessAddress}
                            farAway = {item.farAway}
                            averageReview = {item.averageReview}
                        />
                    </View>
                )}
            />
          </View>
          <View style={{...styles.categoriView, marginBottom: 10}}>
            <Text style={styles.categoriText}>Restaurants in your area</Text>
          </View>
          <View>
            {
                restaurantsData.map(item => (
                    <View key={item.id} style={{paddingBottom: 20}}>
                        <RestaurantCard
                            screenWidth = {cardAreaResWidth*0.95}
                            images = {item.images}
                            restaurantName = {item.restaurantName}
                            numberOfReview = {item.numberOfReview}
                            businessAddress = {item.businessAddress}
                            farAway = {item.farAway}
                            averageReview = {item.averageReview}
                        />
                    </View>
                ))
            }
          </View>
        </ScrollView>
      </View>
    );
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
        //marginTop: 20,
        justifyContent: 'center',
        paddingVertical: 3
    },
    categoriText: {
        fontSize: fonts.fontSizes.s4,
        color: colors.grey2,
        fontWeight: fonts.fontWeights.w7,
        marginLeft: 20
    },
    smallCateView: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        height: 100,
        margin: 10
    },
    smallCateImage: {
        height: 60, 
        width: 60,
        borderRadius: 30,
    },
    smallCateText: {
        fontSize: fonts.fontSizes.s11,
        fontWeight: fonts.fontWeights.w2
    },
    restaurantFlaslist: {
        marginVertical: 10
    },
    resAreaView: {
        width: cardAreaResWidth,
        paddingTop: 10,
    },
    changingText: {
        fontSize: fonts.fontSizes.s8,
        fontWeight: fonts.fontWeights.w2,
        marginLeft: 15,
        marginTop: 10,
        marginRight: 5,
        color: colors.grey2
    }
})