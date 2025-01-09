import React from "react";
import { 
    createNativeStackNavigator, 
    TransitionPresets 
} from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/authScreens/HomeScreen";
import AuthTabs from "./AuthTabs";

const Auth = createNativeStackNavigator();
export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name ="SignInWelcomScreen"
                component = {SignInWelcomeScreen}
                options ={{
                    headerShown: false,
                    
                }}
            />
            <Auth.Screen 
                name ="SignInScreen"
                component = {SignInScreen}
                options ={{
                    headerShown: false,
                    
                }}
            />
            <Auth.Screen 
                name ="AuthTabs"
                component = {AuthTabs}
                options ={{
                    headerShown: false,                    
                }}
            />
        </Auth.Navigator>
    )
}