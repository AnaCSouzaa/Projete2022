import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as SMS from 'expo-sms';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';

export default function TelaSOS({navigation}) {
  const [location, setLocation] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const phoneNumber = "+55 35 9724-6011";
  const message = "Estou em perigo nesse endereço! Preciso de ajuda!" ;

   useEffect(() => {
    async function checkAvailability() {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    }
    checkAvailability();
  }, []);

  const sendSms = async () => {
    const { uri } = await Print.printToFileAsync({
      html: "<h1> Localização: https://www.google.com.br/maps/place/ETE+FMC/@-22.2521447,-45.7047389,15z/data=!4m5!3m4!1s0x94cba2436a6a52ad:0x4b1d9e698970b789!8m2!3d-22.2580998!4d-45.7033694 </h1>"
              
    });
    const contentUri = await FileSystem.getContentUriAsync(uri);
    const {result} = await SMS.sendSMSAsync(
      recipients,
      message,      
      {
        attachments: {
          uri: contentUri,
          mimeType: "application/pdf",
          filename: "Localização.pdf"
        } 
      }
    );
    console.log(result);
  }
  
  const addNumber = () => {
    let newRecipients = [...recipients];
    newRecipients.push(phoneNumber);
    setRecipients(newRecipients);
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
      <TextInput value={phoneNumber} style={styles.campoN} placeholder="Número de telefone" onChange={(value) => setPhoneNumber(value)} />

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
  },
  campoN: {
    textAlign: "left",
    marginTop:200,
    marginLeft:10,
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
  },
  campoM: {
    textAlign: "left",
    marginTop:25,
    marginLeft:10,
    color: "#000000",
    fontSize: 20,
    lineHeight: 26,
  }
});