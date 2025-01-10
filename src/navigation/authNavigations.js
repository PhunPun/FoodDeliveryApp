import React from "react";
import { 
    createNativeStackNavigator, 
    TransitionPresets 
} from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthTabs from "./AuthTabs";
import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createNativeStackNavigator();
export default function AuthStack(){
    return (
      <Auth.Navigator>
        <Auth.Screen
          name="SignInWelcomScreen"
          component={SignInWelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="RestaurantMapScreen"
          component={RestaurantMapScreen}
          options={{
            headerShown: false,
          }}
        />
      </Auth.Navigator>
    );
}