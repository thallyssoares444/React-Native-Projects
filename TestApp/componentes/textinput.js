import React from "react";
import {TextInput,StyleSheet} from "react-native";

export default function(){
    return(
        <TextInput style={estilo.input}></TextInput>
    )
} 

const estilo = StyleSheet.create({
    input:{
        width:150,
        height:20,
        borderRadius:5
    }
})