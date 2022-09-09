import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
const width = Dimensions.get('screen').width;


export default function TelaInicial() {
  return (
      <View style={estilos.PosicaoTitulo}>
      <Text style = {estilos.titulo}> Security For You </Text>
      
      <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotao}> Enviar SMS </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotao}> Gravar ligação </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotaoSOS}> Pedir ajuda </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotao}> Configurações </Text>
      </TouchableOpacity>

      
    </View>

  );
}

const estilos = StyleSheet.create({
  PosicaoTitulo: {
    width: "100%",
    position: "absolute",
  },
  
  titulo:{
    marginTop: 10,
    textAlign:"center",
    color:"#464646",
    fontWeight: "bold",
    fontSize:26,
    lineHeight:42,
    padding:16,    
  }, 
  botao: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 100,
    marginLeft:10,
    marginRight: 10,
  },
  textoBotao: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  textoBotaoSOS: {
    textAlign: "center",
    color: "#FF0000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  }
});