import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
const width = Dimensions.get('screen').width;


export default function TelaInicial({navigation}) {
  const  SendSMS =() => {
    navigation.navigate("SMS - localização")

  }
  const  Call =() => {
    navigation.navigate("Ligar")
  }
  const  Help =() => {
    navigation.navigate("SMS - emergência")
  }

  return (
      <KeyboardAvoidingView style={styles.background}>
      <View>
   
      <TouchableOpacity style={styles.botao} onPress={()=> SendSMS()}>
      <Text style={styles.textoBotao}> Enviar SMS </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={()=> Call()}>
      <Text style={styles.textoBotao}> Realizar ligação </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=> Help()}>
      <Text style={styles.textoBotaoSOS}> Pedir ajuda </Text>
      </TouchableOpacity>
      
    </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#191919'
  },

  botao: {
    backgroundColor: "#00C4CC",
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