import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react';
import { Icon, Button, SocialIcon } from "react-native-elements";
import {TabView, TabBar} from 'react-native-tab-view'
import {
    Route1, Route2, 
    Route3, Route4, 
    Route5, Route6, 
    Route7, Route8 
} from "./MenuTab";
import { menu } from "../../global/Data";
import { 
    colors, 
    parameters, 
    titles, 
    fonts
} from "../../global/style";
const SCREEN_WIDTH = Dimensions.get('window').width


const MenuProductScreen = ({navigation, route}) => {
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.nomal}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      lableStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <Route1 navigation={navigation} />;
      case '2':
        return <Route2 navigation={navigation} />;
      case '3':
        return <Route3 navigation={navigation} />;
      case '4':
        return <Route4 navigation={navigation} />;
      case '5':
        return <Route5 navigation={navigation} />;
      case '6':
        return <Route6 navigation={navigation} />;
      case '7':
        return <Route7 navigation={navigation} />;
      case '8':
        return <Route8 navigation={navigation} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.deep}
          size={25}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation ={navigation}
        route = {route}
      />
    </View>
  );
};

export default MenuProductScreen

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    container: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.button,
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 35,
    },
    text1: {
        fontWeight: 'bold',
        marginLeft: 40,
        color: colors.black,
        fontSize: 18,
    },
    view2: {
        marginTop: 5,
        paddingBottom: 20,
    },
    tab: {
        paddingTop: 0,
        backgroundColor: colors.button,
        justifyContent: 'space-between',
        // alignItems:"center"
    },
    tabContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontWeight: 'bold',
        color: colors.cardbackground,
    },
    tabStyle: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45,
    },
    scene2: {
        backgroundColor: '#673ab7',
    },
});