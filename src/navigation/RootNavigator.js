import React from "react";
import { 
    NavigationContainer 
} from "@react-navigation/native";
import AuthStack from "./authNavigations";
import 'react-native-gesture-handler';

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}