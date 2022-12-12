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

const Cards = () => {
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
        José,confira dica de como economizar na sua conta</Text>
        

<View style={styles.container}>
          <ScrollView horizontal={true}>
           
            


        <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Shadow Props)
          </Text>
        </View>
        <Text>
        Pode parecer um detalhe insignificante, mas a escolha das cores na decoração também ajuda muito quando o assunto é como economizar energia em casa. Isso porque um ambiente com tons escuros sempre vai causar a sensação de que é preciso acender a luz — até mesmo em períodos diurnos.
        
        </Text>


      </View>

      
      <View style={[styles.card]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Shadow Props)
          </Text>
        </View>
        <Text>Depois do ar-condicionado, o chuveiro elétrico é o que mais consome energia em uma residência. Por isso, é tão recorrente ouvirmos por aí que é preciso diminuir o tempo de banho. Portanto, é melhor deixar para pensar na vida em outro momento que não seja esse!.</Text>


      </View>


      


      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Shadow Props)
          </Text>
        </View>
        <Text>Depois de remanejar a sua decoração, favorecendo a entrada da luz do sol e optando por cores claras, é hora de cuidar das suas luminárias de modo que elas também ajudem quem quer saber como economizar energia, mesmo quando elas estiverem acesas à noite.</Text>


      </View>

             
             
          </ScrollView>
          
        </View>
        <View style={[styles.container,{marginTop:0}]}>
        
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
    marginTop: -130,
    marginLeft: 33,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    color:'#fff'
  },
  card: {
    backgroundColor: "#2AE4A5",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 35,
    width: 350,
    marginVertical: -40,
    marginLeft:20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Cards;
