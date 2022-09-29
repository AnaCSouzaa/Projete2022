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
      <View style={styles.container}>
   
      <TouchableOpacity style={styles.botao} onPress={()=> SendSMS()}>
      <Text style={styles.texto}> Enviar SMS </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={()=> Call()}>
      <Text style={styles.texto}> Realizar ligação </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=> Help()}>
      <Text style={styles.texto}> Pedir ajuda </Text>
      </TouchableOpacity>
      
    </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  container:{ 
    flex:0.7,
    width: '100%',
    paddingBottom:50
  },
  botao: {
    backgroundColor: "#00C4CC",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 100,
    marginLeft:10,
    marginRight: 10,
  },
  texto: {
    textAlign: "center",
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
});