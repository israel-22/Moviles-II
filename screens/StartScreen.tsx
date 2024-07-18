import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';
import { ImageBackground } from 'react-native';


export default function ({ navigation }: any) {

  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login() {
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
        let titulo = ""
        let destalle = ""
        switch (errorCode) {
          case "auth/missing-email":
            titulo = "Correo Invalido"
            destalle = "Error de correo electronico, revise sus credenciales"

            break;
          case "auth/missing-password":
            titulo = "Contraseña incorrecta"
            destalle = "Error de contraseña, revise sus credenciales"
            break;
          default:
            titulo = "Error de Ingreso"
            destalle = "revise sus credenciales"
            break;
        }
        Alert.alert(titulo, destalle);
        setEmail("")
        setContrasenia("")

      });

  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ImageBackground source={require('../assets/backF.jpg')} style={styles.ImgBack}>
        <View style={styles.img}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>

        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu correo'
              onChangeText={(texto) => (setEmail(texto))}
              value={email}
               keyboardType='email-address'
            />
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu contraseña'
              onChangeText={(texto) => (setContrasenia(texto))}
              value={contrasenia}
            />
          </View>
          <TouchableOpacity style={styles.btnStart} onPress={login} >
            <Text style={styles.txt}>Comezar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('RegistroScreen')}>
            <Text style={styles.txt}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  ImgBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
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
  img: {
    alignItems: 'center',
    width: 20,

  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
  }
});
