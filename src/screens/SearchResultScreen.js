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
} from "../global/style";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantsData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width

const SearchResultScreen = ({navigation,route}) => {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            style={{backgroundColor: colors.cardbackground}}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <SearchResultCard
                screenWidth={SCREEN_WIDTH}
                images={item.images}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                productData={item.productData}
                //OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
              />
            )}
            ListHeaderComponent={
              <View>
                <Text style={styles.listHeader}>
                  {restaurantsData.length} Result for {route.params.item}
                </Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },

    listHeader: {
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
});