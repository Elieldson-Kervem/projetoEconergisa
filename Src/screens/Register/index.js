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
import CustomButton2 from "./customButton2/CustomButton2";
const image = require("../../loginImg/loginBackground.png");
import CustomImput2 from "./RegisterValues";
import {useNavigation} from "@react-navigation/native"
import {useForm,Controller} from 'react-hook-form'

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


const Register = () => {
  const navigation=useNavigation()
  const {control,handleSubmit,formState:{errors}, watch}= useForm();
  const psw=watch('userPassword')
  
  const onRegisterIsPressed = (data) =>{
     
    console.warn(data);
    navigation.navigate('ConfirmLogin');
    
  }

  const onTermsOfUse=()=>{
    return console.warn("termo");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
         
          <Image
            source={require("../../Img/Logo.png")}
            style={styles.Logo}
            resizeMode="contain"
          ></Image>

          <Text style={styles.Text}>
         
            Venha criar uma conta conosco e comece a economizar
          </Text>
          
          <CustomImput2 rules={{required:'O nome do usuario é obrigatorio',minLength:{value:10,message:'nome deve ter no minimo 10 caracteres'},}} placeholder="digite seu nome" name="name" control={control}  placeholderTextColor="#fff"></CustomImput2>

          
          <CustomImput2 rules={{required:'O nome do usuario é obrigatorio',minLength:{value:10,message:'nome deve ter no minimo 10 caracteres'},}} placeholder="digite seu nome de usuario" name="userName" control={control}  placeholderTextColor="#fff"></CustomImput2>

          <CustomImput2 rules={{required:'O email do usuario é obrigatorio',minLength:{value:10,message:'Email deve ter no minimo 10 caracteres'},pattern:{value:reg,message:'email invalido'}}} placeholder="digite seu email" name="email" control={control}  placeholderTextColor="#fff"></CustomImput2>


          <CustomImput2 rules={{required:"A senha do usuario é obrigatorio",minLength:{value:6,message:'Senha  deve ter no minimo 6 caracteres'}}} placeholder="digite uma senha de 8 digitos" name="password" control={control}  placeholderTextColor="#fff" secureTextEntry={true}></CustomImput2>

          <CustomImput2 rules={{
            validate: value => value === psw || 'A senha não é igual'
          }}  placeholder="digite sua senha novamente" name="password-repeat" control={control}  placeholderTextColor="#fff" secureTextEntry={true} ></CustomImput2>



          
          <Text style={styles.text}>"Ao registrar você concorda com 
            <Text style={styles.textTerm} onPress={onTermsOfUse}> os termos de uso e privacidade"</Text>
           </Text>

          <CustomButton2 
          onPress={handleSubmit(onRegisterIsPressed)}
            type="primary"
            text="Registrar"
          ></CustomButton2>
          <CustomButton2
            
            type="third"
            text="Login com gmail"
          ></CustomButton2>

          <CustomButton2
            type="third"
            text="Login com facebook"
          ></CustomButton2>
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
    height: "100%",
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
  }
});

export default Register;
