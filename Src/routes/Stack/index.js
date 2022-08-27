import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home"

import Register from "../../screens/Register"
import Login from "../../screens/Login"
import ConfirmLogin from "../../screens/ConfirmLogin";


const {Navigator,Screen}= createNativeStackNavigator()

export default function (){
    return(
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
     <Screen name="Home" component={Home}></Screen>
     <Screen name="Register" component={Register}></Screen>
     <Screen name="Login" component={Login}></Screen>
     <Screen name="ConfirmLogin" component={ConfirmLogin}></Screen>
                    
                    
        
        
        
                </Navigator>
            )
        }
    
