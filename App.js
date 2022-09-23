import React from 'react';
import {Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicial from './telas/telaInicial';
import TelaSMS from './telas/telaSMS';
import TelaLigar from './telas/telaLigacao';
import TelaSOS from './telas/telaSOS';
import TelaLogin from './telas/telaLogin';

const width = Dimensions.get('screen').width;
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Security For You" component={TelaInicial} />
      <Stack.Screen name="SMS - localização" component={TelaSMS} />
      <Stack.Screen name="SMS - emergência" component={TelaSOS} />
      <Stack.Screen name="Ligar" component={TelaLigar} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



