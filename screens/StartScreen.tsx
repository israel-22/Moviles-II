import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../Navigation/MainNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import CategoriasScreen from '../screens/CategoriasScreen'
interface Props extends StackScreenProps<RootStackParamList,'StartScreen'>{};

export default function ({ navigation }: Props) {
  const [name, setName] = useState('');

  const handleInputChange = (text: string) => {
    setName(text);
  };

  const handleStartPress = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa tu nombre para empezar');
    } else {
      Alert.alert('Bienvenido', `Hola ${name}, ¡comienza el juego!`);
      setName('');
      navigation.navigate('CategoriasScreen');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text style={styles.title}>Pair Puzzle</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu nombre aquí'
            onChangeText={handleInputChange}
            value={name}
          />
          <Button title='Empezar' onPress={handleStartPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginBottom: 5,
    width: 300,
    height: 35,
    textAlign: 'center',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    position: 'absolute',
    top: -150,
    width: 200,
    padding: 10,
    left: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
