
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getDatabase, ref, set } from "firebase/database";
import { auth, db } from '../config/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ImageBackground } from 'react-native';


export default function RegistroScreen({ navigation }: any) {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  function registro() {
    // autentificar contraseña
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
        setCorreo("")
        setContrasenia("")
        setNombre("")

      });

    //Alert.alert("Autentificacion completa")
    //conexion bace de datos
    set(ref(db, 'usuarios/'), {
      username: nombre,
      email: correo,
      pasword: contrasenia
    });
    Alert.alert("Registro Exitoso")
  }


  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ImageBackground source={require('../assets/backF.jpg')} style={styles.ImgBack}>
        <View style={styles.img}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}> REGISTRATE </Text>
        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder='Nombre Usuario'
              onChangeText={(texto) => (setNombre(texto))}
              value={nombre}
            />
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu correo'
              onChangeText={(texto) => (setCorreo(texto))}
              value={correo}
               keyboardType='email-address'
            />
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu contraseña'
              onChangeText={(texto) => (setContrasenia(texto))}
              value={contrasenia}
             
            />
            <TextInput
              style={styles.input}
              placeholder='Verifica tu contraseña'
              onChangeText={(texto) => (setContrasenia(texto))}
              value={contrasenia}
            />
          </View>
          <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('StartScreen')} >
            <Text style={styles.txt}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRegister} onPress={registro}>
            <Text style={styles.txt}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  ImgBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  img: {
    alignItems: 'center',
    width: 20,

  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
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
    fontSize: 27,
    fontWeight: 'bold',
    color: 'lightgrey',
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



})