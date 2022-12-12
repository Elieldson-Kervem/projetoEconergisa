import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, button } from "aws-amplify";
import Icon from "react-native-vector-icons/MaterialIcons";
const image = require("../../Img/mainHomePage.png");
import { useRoute } from "@react-navigation/native";

const Test = () => {
  const [name,setName]=useState("")
  const [time,setTime]=useState("")
  const result=(Math.floor(name) * Math.floor(time))/1000
  const navigation = useNavigation();
  const singOut = () => {
    Auth.signOut();
      
  };
  const homeSection=()=>{
    navigation.navigate('Main')
  }
  const onPress=()=>{
    alert(`O valor do kwh desse aparelho é ${result}`)
};

  

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Image
          source={require("../../Img/Logo.png")}
          style={styles.Logo}
        ></Image>

        <Text style={styles.Text}>
        Essa é nossa tela de controle de consumo. adicione as informações no campo abaixo e obtenha o resultado do seu consumo</Text>
        

<View style={styles.container}>
          <ScrollView horizontal={false}>
           
            


          <TextInput placeholder="Digite o valor da potencia do aparelho" style={styles.input} placeholderTextColor="#fff"onChangeText={(value)=>setName(value)} keyboardType='numeric'></TextInput>

            <TextInput placeholder="Tempo estimado de funcionamento" style={[styles.input,{marginBottom:3}]} placeholderTextColor="#fff" onChangeText={(value)=>setTime(value)} keyboardType='numeric'></TextInput>
            
           
             
             
          </ScrollView>
          
        </View>
        <View style={[styles.container,{marginTop:0}]}>
        <TouchableHighlight onPress={onPress} style={[{marginLeft:'25%'}]}>
        <View style={[styles.button,{}]}>
          <Text style={[{color:'#fff'}]}>Testar</Text>
        </View>
      </TouchableHighlight>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={[{marginTop:'15%',marginLeft:10}]} onPress={singOut}>
          <Image 
                
                source={require("../../Icons/outLog.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity style={[{marginTop:'15%',marginLeft:75}]} onPress={homeSection}>
          <Image 
                
                source={require("../../Icons/home.png")}
              />
              </TouchableOpacity>
              
          </ScrollView>
         
        </View>

       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  input:{
        
    marginLeft:15,
    marginTop: 5,
    width: "90%",
    marginVertical:5,
    height: 50,
    color: '#fff',
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Roboto",
    backgroundColor: "rgba(0,0,0,0.2)",
    placeholderTextColor:"#fff",
    
    textAlign: "center",
    borderRadius: 7,
    borderWidth:2,
    borderColor:'rgba(255,255,255,0.2)'
    
    

},
  image: {
    flex: 1,

    width: "100%",
  },
  Logo: {
    marginLeft: 0,
    width: "35%",
    height: "30%",
    justifyContent: "center",
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
  btnArea: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  button: {
    alignItems: "center",
    width: 150,
    backgroundColor: "#2AE4A5",
    padding: 10,
    marginRight: 50,
    borderRadius: 5,
    
  },
  iconSyles: {
    marginTop:10,
    alignItems:'center',
    padding: 35,
    backgroundColor: "#2AE4A5",
    borderRadius: 50,
    marginLeft:30,
    shadowColor: '#fff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign:'center'
    

  },
  button2: {
    alignItems: "center",
    width: 150,
    backgroundColor: "#FBC88E",
    padding: 10,
  },
  logOut: {
    fontFamily: "Roboto",
    fontSize: 20,
    backgroundColor: "#FBC88E",
    width: "50%",
    borderRadius: "7",
    color: "#fff",
    textAlign: "center",
  },
  btnTxt: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  bottomImg: {
    justifyContent: "center",
    height: 350,
    width: 300,
    marginTop: -140,
    marginLeft: 33,
  },
});

export default Test;
