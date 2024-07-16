import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
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
      //navigation.navigate('CategoriasScreen', { level: 'easy', category: 'animals' });
   
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pair Puzzle</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu nombre aquí!!'
          onChangeText={handleInputChange}
          value={name}
        />
        <Button title='Empezar' onPress={handleStartPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
});

export default StartScreen;
