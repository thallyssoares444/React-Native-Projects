import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Input from './componentes/textinput'

export default function Login() {
  return (
    <View style={estilo.div}>         
      <Text style={estilo.title}>Login</Text>
      <View>
        <Text style={estilo.txt}>Username or Email</Text>
        <Input/>          
        <Text style={estilo.txt}>Password</Text>
        <Input/>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  title:{
    fontSize:25
  },
  div:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  txt:{
    fontSize:15
  }
})
