import React from "react";
import { View,TextInput,StyleSheet,Text } from "react-native";
import { Controller } from "react-hook-form";


const CustomImput=({control,name,placeholder,secureTextEntry,rules={}})=>{
    return(
        
           
        
           
         
           <Controller 
           control={control}
           
           
            name={name} 
            rules={rules}
            render={({field:{value,onChange,onBlur},fieldState:{error}})=>
             (
                <>
                <View style={styles.container}>
             <TextInput placeholder={placeholder}
             onBlur={onBlur} 
             placeholderTextColor="#fff"
             style={[styles.input,{borderColor: error ? 'rgba(255,255,0,0.5)':'#fff' }]} 
             onChangeText={onChange} 
             value={value}
             secureTextEntry={secureTextEntry}
             ></TextInput>   
             </View>
            {error &&(<Text style={{color:'rgb(255,255,0)',alignSelf:'center'}}>{error.message ||'Erro'}</Text>)}
             </>
             )} 
           
            ></Controller>
         
            
         
           
       
       
        
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        color:'#fff'
    
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
        
        
    
    }
    
})
export default CustomImput