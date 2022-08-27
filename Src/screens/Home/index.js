import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity}from "react-native";
import { Button } from "react-native";
import {useNavigation} from "@react-navigation/native"
const image = require("../../Img/backgroundHome.png");


const Home = () => {
  const navigation=useNavigation()
  return(
  <View style={styles.container}>
    <ImageBackground source={image}  style={styles.image}>
        <Image source={require("../../Img/Logo.png")} style={styles.Logo}></Image>
        <Text style={styles.Text}>
        Bem vindo ao Econergise, o app onde você economiza na conta de energia
        </Text>
        <View style={styles.btnArea}>
           <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.btnTxt}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Register")}>
            <Text style={styles.btnTxt}>Cadastrar</Text>
           </TouchableOpacity>
         
           
        </View>
        <View style={styles.container}>
        <Image source={require("../../Img/bottomImg.png")} style={styles.bottomImg}></Image>
        </View>
    </ImageBackground>
  </View>
  
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  image: {
    flex: 1,
    
    width:"100%"
  },
  Logo:{
 
    marginLeft:80,
    width:200,
    height:250,
    justifyContent:'center'

  },
  Text:{
    marginBottom:20,

    width:300,
    marginLeft:30,
    fontSize:23,
    textAlign:'center',
    fontFamily:'Roboto',
    color:"#fff",
    fontWeight:"700"

  },
  btnArea:{
    flexDirection:'row',
    justifyContent:'center',
    padding:30,
    
    
  },
  button: {
    alignItems: "center",
    width:150,
    backgroundColor: "#2AE4A5",
    padding: 10,
    marginRight:50,
    borderRadius:5
  },
  button2: {
    alignItems: "center",
    width:150,
    backgroundColor: "#FBC88E",
    padding: 10,
 
    borderRadius:5
  },
  btnTxt:{
    fontFamily:'Roboto',
    fontSize:15,
    color:'#fff',
    fontWeight:'bold'
  },
  bottomImg:{
    justifyContent:'center',
    height:350,
    width:300,
    marginTop:-140,
    marginLeft:33
  }
});

export default Home;