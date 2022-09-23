import React, { useState } from 'react' ;
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function TelaLogin({navigation}){
  const [Email, setEmail] = useState(null)
  const [Senha, setSenha] = useState(null)
  const entrar =() => {
    navigation.reset({
      index:0,
      routes:[{name:"Security For You"}]
    })
  }
  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.logo}> 
        <Image
        source={require('../assets/projetelogo.png')}
        />

      </View>
    
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={value => setEmail(value)}
        keyboardType= "email-address"
        />
        <TextInput 
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={value=> setSenha(value)}
        secureTextEntry ={true}
       />
         <TouchableOpacity style={styles.btnSubmit} onPress={()=> entrar()} >
          <Text style={styles.submitText}>Acessar</Text>
         </TouchableOpacity>
      </View>
      <View  style={styles.logoEte}> 
      <Image
        source={require('../assets/logoETE.png')} />
      </View> 


    </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  logo:{
    flex:1,
    justifyContent: 'center'
  }, 
  container:{ 
    flex:1,
    alignItems: 'center',
    width: '90%',
    paddingBottom:50
  },
  input:{
  backgroundColor:'#FFF',
  width:'90%',
  marginBottom:15,
  color:'#222',
  fontSize:17,
  borderRadius:7,
  padding:10,

  },
  btnSubmit:{
  backgroundColor: '#00C4CC',
  width:'90%',
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius:7,
},
  submitText:{
  color:'#FFF',
  fontSize: 18,
},
logoEte:{
  flex:0.2,
  justifyContent: 'center',
}
}
);