import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { TouchableOpacity, View,Text} from "react-native";

const CustomButton= ({onPress,type,text})=>{
    return(
        <View style={styles.container}>
            <Pressable style={[styles.btn,styles[`btn_${type}`]]} onPress={onPress}>
        <Text style={styles.btnTxt} >{text}</Text>
        </Pressable>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
      flex:0,
      alignItems:'center'
    },
    btn: {
        
        alignItems: "center",
        width:"70%",
       
        padding: 10,
        borderRadius:5,
        marginVertical:12.63
      },
      btn_primary:{
        backgroundColor: "#2AE4A5",
        
      },

      btn_secondary:{
        
        fontWeight:'extra-bold'
      },
      btn_third:{
        backgroundColor: "rgba(255,200,142,0.9)",
        


      },
      btnTxt:{
        fontFamily:'Roboto',
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
      }
})
export default CustomButton