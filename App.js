import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isResult, setIsResult] = useState(0);

  function calcular() {
    setIsResult(Math.floor(Math.random() * 10));
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>
        Jogo do N° Aleatório
      </Text>

      <View style={styles.boxView}>
        <Image
          source={{
            uri: 'https://atividadesprofessores.com.br/wp-content/uploads/2022/04/Preschool-learning-board-2.jpg',
          }}
          style={{ width: 150, height: 180 }}
        />
      </View>

      <Text style={{ marginTop: '5%', fontSize: 20 }}>
        Pense em um n° de 0 a 10
      </Text>

      <Text style={{ marginTop: '5%', fontSize: 20 }}>{isResult}</Text>

      <Pressable style={styles.btn} onPress={calcular}>
        <Text>Descobrir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    width: 190,
    height: 190,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
});
