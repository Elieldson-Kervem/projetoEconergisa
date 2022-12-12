import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, button } from "aws-amplify";
import Icon from "react-native-vector-icons/MaterialIcons";
const image = require("../../Img/mainHomePage.png");
import { useRoute } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  const singOut = () => {
    Auth.signOut();
  };
  const homeSection=()=>{
    navigation.navigate('Main')
  }
  const TestScreen=()=>{
    navigation.navigate('Test')
  }
  const CardsTest=()=>{
    navigation.navigate('Cards')
  }
  const moveToAddNewCustomer = () => {
    alert("press");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Image
          source={require("../../Img/Logo.png")}
          style={styles.Logo}
        ></Image>

        <Text style={styles.Text}>
          Bem vindo José, escolha abaixo uma das opções do nosso app
        </Text>
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={moveToAddNewCustomer}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon.png")}
              />
              <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Controle de consumo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={TestScreen}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon2.png")}
              />
             <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Saiba quanto cada aparelho consome</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={CardsTest}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon7.png")}
              />
              <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Saiba como economizar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={moveToAddNewCustomer}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon8.png")}
              />
                <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Entenda sua conta de energia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveToAddNewCustomer}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon9.png")}
              />
                <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Uso consciente da energia elétrica</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveToAddNewCustomer}>
              <Image
                style={styles.iconSyles}
                source={require("../../Icons/icon1.png")}
              />
                <Text style={[styles.btnTxt,{width:120,textAlign:'center'}]}>Saiba como economizar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={[{marginTop:'20%',marginLeft:10}]} onPress={singOut}>
          <Image 
                
                source={require("../../Icons/outLog.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity style={[{marginTop:'20%',marginLeft:75}]} onPress={homeSection}>
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

export default Main;
