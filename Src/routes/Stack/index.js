import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home"

import Register from "../../screens/Register"
import Login from "../../screens/Login"
import ConfirmLogin from "../../screens/ConfirmLogin";
import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import Main from "../../screens/Main";
import { set } from "react-hook-form";
import { ActivityIndicator, View} from "react-native";
import Test from "../../screens/Test"
import Cards from "../../screens/Cards";

const {Navigator,Screen}= createNativeStackNavigator()

export default function (){
    const [user,setUser]=useState(undefined) 
    const checkUser= async()=>{
        try {
           const authuUser = await Auth.currentAuthenticatedUser({bypassCache:true})
           setUser(authuUser)
            
        } catch (error) {
            setUser(null)
       
    }} 
    useEffect(()=>{
        checkUser()
    ,[]}) 

    useEffect(()=>{
        const listerner=(data)=>{
            if(data.payload.event==='signIn' || data.payload.event=== 'signOut' ){
                checkUser()
            }

        }
        Hub.listen('auth',listerner)
        return ()=> Hub.remove('auth',listerner)
    }
      ,[])


    if(user===undefined){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator></ActivityIndicator>

            </View>
        )
    }


    return(
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      {user ? (
        <>
        <Screen name="Main" component={Main}></Screen>  
                <Screen name="Test" component={Test}></Screen> 
                <Screen name="Cards" component={Cards}></Screen>
</>
                
      ):( 
      <>
      <Screen name="Home" component={Home}></Screen>
      <Screen name="Register" component={Register}></Screen>
      <Screen name="Login" component={Login}></Screen>
      <Screen name="ConfirmLogin" component={ConfirmLogin}></Screen>
      </>
      )}
   
                    
                    
        
        
        
                </Navigator>
            )
        }
    
