import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';


// expo install expo-sms

export default function TelaSOS({navigation}) {
  const [location, setLocation] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const message = "Estou em perigo nesse endereço! Preciso de ajuda!";
  const [phoneNumber, setPhoneNumber] = useState([]);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }  
      setLocation(location);
    })();
  })

  useEffect(() => {
    async function checkAvailability() {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    }
    checkAvailability();
  }, []);

  async function getLocation()
  {
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    Geocoder.init(AIzaSyB6fG6y3lW7igVPfo3dCu6zJSNn2WE2bvE);
    Geocoder.init(config.geocodingAPI);
    Geocoder.from(location.coords.latitude, location.coords.longitude)
		.then(json => {
      console.log(json);
        		// let addressComponent = json.results[0].address_components[0];
			// console.log(addressComponent);
		})
		.catch(error => console.warn(error));
  }

  const sendSms = async () => {
    const {result} = await SMS.sendSMSAsync(
      recipients,
      message,      
    );
    console.log(result);
  };

  const addNumber = () => {
    let newRecipients = [...recipients];
    newRecipients.push(phoneNumber);
    setRecipients(newRecipients);
    setPhoneNumber(undefined);
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text style={styles.adicionado}>Nenhum número adicionado!</Text>
    }

    return recipients.map((recipient, index) => {
      return <Text style={styles.adicionado} key={index}>{recipient}</Text>;
    });
  };

  return (
    <View>
      <TextInput value={phoneNumber} style={styles.campoN} placeholder="Número de telefone" onChangeText={(value) => setPhoneNumber(value)} />

      <TouchableOpacity style={styles.botao} onPress={addNumber} >
      <Text style={styles.texto}> Adicionar número </Text>
      </TouchableOpacity>

      <Text style={styles.destinatario}>Destinatário(s):</Text>
      {showRecipients()}

      <TouchableOpacity  style={styles.botao} onPress={() => setRecipients([])} >
      <Text style={styles.texto}> Limpar destinatários </Text>   
      </TouchableOpacity>

      <TextInput value={message} style={styles.campoM} placeholder="Mensagem" onChangeText={(value) => setMessage(value)} />
           
      {isAvailable ?  <TouchableOpacity  style={styles.botao} onPress={sendSms} > 
      <Text style={styles.texto}> Enviar SMS </Text>
      
      </TouchableOpacity> : <Text style={styles.texto}> SMS não disponível </Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',    
  },

  conteudo: {
    backgroundColor: "#d3d3d3",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 100,
    marginLeft:10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: "#00C4CC",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 25,
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
  destinatario: {
    textAlign: "center",
    marginTop: 25,
    marginLeft:10,
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  adicionado: {
    textAlign: "left",
    marginLeft:10,
    color: "#000000",
    fontSize: 15,
    lineHeight: 26,
    fontWeight: "italic",
  },
  campoN: {
    textAlign: "left",
    marginTop:200,
    marginLeft:10,
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "italic",
  },
  campoM: {
    textAlign: "left",
    marginTop:25,
    marginLeft:10,
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "italic",
  }
});