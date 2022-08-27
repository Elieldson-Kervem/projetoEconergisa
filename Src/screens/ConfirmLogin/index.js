import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import CustomButton from "./btnCuston";
const image = require("../../loginImg/loginBackground.png");
import CustomImput3 from "./RegisterValues";
import {useNavigation} from "@react-navigation/native"
import {useForm,Controller} from 'react-hook-form'



const ConfirmLogin = () => {
  const navigation=useNavigation()
  const {control,handleSubmit,formState:{errors}, watch}= useForm();
 


  return (
    <ScrollView resizeMode="cover" >
      
      <View style={styles.container}>
      <ImageBackground source={image} style={[styles.image,styles.container]} resizeMode="stretch">
        
         
          <Image
            source={require("../../Img/Logo.png")}
            style={styles.Logo}
            resizeMode="contain"
          ></Image>

          <Text style={styles.Text}>
         
            Venha criar uma conta conosco e comece a economizar
          </Text>
          <CustomImput3 rules={{required:'Confime o codigo enviado para seu email',minLength:{value:6,message:'Condigo tem 6 digitos'} }}  placeholder="Confime o codigo enviado para seu email" name="emailCode" control={control}  placeholderTextColor="#fff"></CustomImput3>
      
            
            <CustomButton  type='secundary' text='Volte para a pagina de login'></CustomButton>
            <CustomButton type='secundary' text='Volte para a pagina de Registro'></CustomButton>


            <CustomButton  type='primary' text='Criar conta' ></CustomButton>
          
      


       
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },

  image: {
    flex:1,
  
    width: "100%",
    

  },
  Logo: {
    marginLeft: 5,
    width: "40%",
    height: 180,
    justifyContent: "center",
    maxWidth: 300,
  },
  Text: {
    marginBottom: 20,

    width: 300,
    marginLeft: 30,
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "700",
  },

  svg: {
    width: "80%",
    height: 130,
    justifyContent: "center",
    marginLeft: 30,
  },
  text:{
  
    width:'100%',
   alignItems:'center',
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:16,
    marginVertical:5,
    marginHorizontal:5,
    color:'#fff'
  },
  textTerm:{

    
    alignItems:"center",
    padding:10,
   
    color:'rgba(255,200,142,0.9)',
    textAlign:'center',
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:16,
    marginVertical:5
  },
  button: {
    alignItems: "center",
    width:150,
    backgroundColor: "#2AE4A5",
    padding: 10,
    borderRadius:5
}});

export default ConfirmLogin;
