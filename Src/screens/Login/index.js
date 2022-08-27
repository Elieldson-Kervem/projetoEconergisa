import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity,TextInput, SafeAreaView,ScrollView}from "react-native";
import { useState } from "react";
import CustomButton from "./customButton/customButton";
const image = require("../../loginImg/loginBackground.png");
import CustomImput from "./loginValues";
import {useForm,Controller} from 'react-hook-form'
import {useNavigation} from "@react-navigation/native"
import { Auth } from "aws-amplify";
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const Login = () => {
  
  const navigation=useNavigation()
  const {control,handleSubmit,formState:{errors}}= useForm();
  const [loading,setLoading]= useState(false)
  
  const onSingIsPressed = async(data) =>{
    if(loading){
      return;
    }
     setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password)
    console.log(response);
    } catch (error) {
       alert(`opps ${error.message}`)
    }
    setLoading(false)
    
  }

  return(
    <ScrollView  >
  <View style={styles.container} >
      
    <ImageBackground source={image}  style={styles.image} resizeMode='cover'>
 
        <Image source={require("../../Img/Logo.png")} style={styles.Logo} resizeMode='contain'></Image>
        <Text style={styles.Text}>
        Estavamos te esperando para voltar a economizar2
        </Text>
 
     
     
       <CustomImput rules={{required:'O email do usuario é obrigatorio',minLength:{value:10,message:'Email deve ter no minimo 10 caracteres'},pattern:{value:reg,message:'email invalido'}}} placeholder="digite seu email" name="username" control={control}  placeholderTextColor="#fff"></CustomImput>
       
       <CustomImput rules={{required:"A senha do usuario é obrigatorio",minLength:{value:6,message:'Senha  deve ter no minimo 6 caracteres'}}} placeholder="digite sua senha" name="password" control={control}  placeholderTextColor="#fff" secureTextEntry={true}></CustomImput>

       

  

       <CustomButton type='secondary' text='Esqueceu a senha?'></CustomButton>

       <CustomButton onPress={handleSubmit(onSingIsPressed)} type='primary' text={loading ? 'carregando':'Login'}></CustomButton>

       <CustomButton  type='third' text='Login com gmail'></CustomButton>
       <CustomButton type='third' text='Login com facebook'></CustomButton>
      
        
    </ImageBackground>
  </View>
  </ScrollView>
  )
  };

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
   justifyContent :'center',
   
  },
 
  image: {
    height:'100%',
    width:"100%"
  },
  Logo:{
 
    marginLeft:5,
    width:"40%",
    height:180,
    justifyContent:'center',
    maxWidth:300

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
  

  

 
  svg:{
    width:"80%",
    height:130,
    justifyContent:'center',
    marginLeft:30
    
  },
  
});

export default Login;