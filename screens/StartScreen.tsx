import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';


export default function ({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login(){
    signInWithEmailAndPassword(auth, email, contrasenia)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate("CategoriasScreen")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }

  

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.title}>Pair Puzzle</Text>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo'
            onChangeText={(texto)=>(setEmail(texto))}
          />
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu contraseña'
            onChangeText={(texto)=>(setContrasenia(texto))}
          />
        </View>
        <TouchableOpacity style={styles.btnStart} onPress={login} >
          <Text style={styles.txt}>Comezar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister} onPress={()=>navigation.navigate('RegistroScreen')}>
          <Text style={styles.txt}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: 300,
    height: 35,
    textAlign: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnStart: {
    backgroundColor: '#3c59ea',
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

  },
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  btnRegister: {
    backgroundColor: '#17B169',
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
  },
});
