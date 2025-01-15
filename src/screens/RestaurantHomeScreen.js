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
    Modal
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
import {TabView, TabBar} from 'react-native-tab-view'
import RestaurantHeader from "../components/RestaurantHeader";
import { restaurantsData, menu } from "../global/Data";
import { updateLoggerConfig } from "react-native-reanimated/lib/typescript/logger";
import MenuScreen from "./RestaurantTabs/MenuScreen";
import {
  Route1, Route2, 
  Route3, Route4, 
  Route5, Route6, 
  Route7, Route8 
} from "./RestaurantTabs/MenuTab";

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH

const RestaurantHomeScreen = ({navigation,route}) => {
  const {id, restaurant} = route.params
  const [routes] = useState([
    {key: "first", title: "MENU"},
    {key: "second", title: "INFOR"},
    {key: "third", title: "REVIEWS"},
    {key: "fourth", title: "GALLERY"},
  ])
  const [index, setIndex] = useState(0)
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle = {{backgroundColor: colors.nomal}}
      tabStyle = {styles.tabStyle}
      scrollEnabled = {true}
      style = {styles.tab}
      lableStyle = {styles.tabLabel}
      contentContainerStyle = {styles.tabContainer}
      persistentScrollbar={true}
    />
  )
  const UpdateRoute1 = () => {
  }
  const menuPressed = () => {
    navigation.navigate("MenuProductScreen")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantsData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantsData[id].restaurantName}
              </Text>
              <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
              <View style={styles.view4}>
                {/* review */}
                <Icon
                  type="material-community"
                  name="star"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text4}>
                  {restaurantsData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  {restaurantsData[id].numberOfReview}
                </Text>
                {/* farAway */}
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {restaurantsData[id].farAway} min away
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6_1}> Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {restaurantsData[id].collectTime}
                </Text>
                <Text style={styles.text6_1}>min</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6_1}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>
                  {restaurantsData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && 
          <MenuScreen onPress={menuPressed}  />
        }
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}> View Cart </Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 35
  },
  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  view3: {
    flex: 8
  },
  view4: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 5
  },
  view5: {
    flex: 3, 
    alignItems: 'center'
  },
  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  view8: {
    flex: 3, 
    alignItems: 'center'
  },
  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.button,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
    marginTop: 5
  },
  view10: {
    elevation: 10, 
    backgroundColor: colors.pagebackground
  },
  view11: {
    backgroundColor: colors.button,
    height: 50,
    alignContent: 'center',
    marginBottom: 0,
    justifyContent: 'center',
  },
  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.nomal,
    borderRadius: 6,
    paddingBottom: 2,
  },
  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.button,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  view15: {
    marginTop: 5, 
    paddingBottom: 20
  },
  text1: {
    color: 'green', 
    fontSize: fonts.fontSizes.s10, 
    fontWeight: fonts.fontWeights.w7
  },
  text2: {
    fontSize: fonts.fontSizes.s6, 
    fontWeight: fonts.fontWeights.w7, 
    color: colors.grey1
  },
  text3: {
    fontSize: fonts.fontSizes.s9, 
    color: colors.grey3
  },
  text4: {
    fontFamily: fonts.android.bold,
    fontSize: fonts.fontSizes.s11,
    color: colors.grey3,
    marginLeft: 2,
  },
  text5: {
    fontFamily: fonts.android.bold,
    fontSize: fonts.fontSizes.s11,
    color: colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    fontFamily: fonts.android.bold,
    fontSize: fonts.fontSizes.s11,
    color: colors.grey3,
    marginLeft: 0,
  },
  text6_1: {
    fontSize: fonts.fontSizes.s9, 
    fontWeight: fonts.fontWeights.w7, 
    color: colors.grey2, 
  },
  text7: {
    fontSize: fonts.fontSizes.s8, 
    fontWeight: fonts.fontWeights.w7, 
    color: colors.black, 
    marginTop: 5
  },
  text8: {
    fontSize: fonts.fontSizes.s11, 
    color: colors.deep, 
    marginBottom: 5
  },
  text9: {
    fontSize: fonts.fontSizes.s8, 
    fontWeight: fonts.fontWeights.w7, 
    color: colors.nomal
  },
  text10: {
    fontSize: fonts.fontSizes.s8,
    fontWeight: fonts.fontWeights.w7,
    color: colors.nomal,
    marginTop: 5,
  },
  text11: {
    fontSize: fonts.fontSizes.s10, 
    fontWeight: fonts.fontWeights.w7,
    color: colors.nomal, 
    marginBottom: 5
  },
  text12: {
    padding: 10,
    fontWeight: fonts.fontWeights.w7,
    fontSize: fonts.fontSizes.s7,
    color: colors.nomal,
  },
  text13: {
    paddingHorizontal: 3,
    fontWeight: fonts.fontWeights.w7,
    fontSize: fonts.fontSizes.s7,
    color: colors.nomal,
  },
  text14: {
    fontWeight: fonts.fontWeights.w7,
    marginLeft: 40,
    color: colors.black,
    fontSize: fonts.fontSizes.s7,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  tabLabel: {
    fontWeight: fonts.fontWeights.w7, 
    color: colors.nomal
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4, 
    maxHeight: 45
  },
});