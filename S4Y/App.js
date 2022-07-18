import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;


export default function App() {
  return (
    <View style={estilos.PosicaoTitulo}>
      <Text style = {estilos.titulo}> Security For You </Text>
      
      <TouchableOpacity style={estilos.botaoSMS}>
      <Text style={estilos.textoBotaoSMS}> Enviar SMS </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={estilos.botaoGravar}>
      <Text style={estilos.textoBotaoGravar}> Gravar ligação </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoSOS}>
      <Text style={estilos.textoBotaoSOS}> Pedir ajuda </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoConfiguracao}>
      <Text style={estilos.textoBotaoConfiguracao}> Configurações </Text>
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
  botaoSMS: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 250,
    marginLeft:10,
    marginRight: 10,
  },
  textoBotaoSMS: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoSOS: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 25,
    marginLeft:10,
    marginRight: 10,
  },
  textoBotaoSOS: {
    textAlign: "center",
    color: "#FF0000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoGravar: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 25,
    marginLeft:10,
    marginRight: 10,
  },
  textoBotaoGravar: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoConfiguracao: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 25,
    marginLeft:10,
    marginRight: 10,
  },
  textoBotaoConfiguracao: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  }
});
