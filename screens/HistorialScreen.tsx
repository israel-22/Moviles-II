import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { onValue, ref,set} from "firebase/database";
import { db } from '../config/Config';
import { ImageBackground } from 'react-native';
export default function HistorialScreen() {
  const [pin, setPin] = useState("")
  const [nombre, setNombre] = useState("")
  const [intento, setIntento] = useState("")
  function buscar(){

    const starCountRef = ref(db, 'profilesGames/'+pin);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setNombre(data.username);
      setIntento(data.attempts || 0);
    
    });
}
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Bperfil.jpg')} style={styles.ImgBack}>
      <Text style={styles.title}>Historial de Juegos</Text>
      <TextInput placeholder='Ingrese PIN' style={styles.pin}
      onChangeText={(texto)=>setPin(texto)}
      value={pin}
       keyboardType='numeric'
      />
<TouchableOpacity style={styles.btnRegister} onPress={buscar}>
            <Text style={styles.txt}>BUSCAR</Text>
          </TouchableOpacity>
     
      <Text style={styles.label}>Nombre Jugador:  {nombre}</Text>
      <Text style={styles.label}>Intentos Jugador:   {intento}</Text>
      <View style={styles.historyContainer}>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRegister: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'white',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    marginBottom:10,
    top:10
  },
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 2,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
    backgroundColor: '#f5f5f5',
  },
  pin:{
 borderWidth:1,
 backgroundColor:'grey',
 borderColor:'Black',
 borderRadius:5,
 width:'76%',
 padding:5
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 10,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  historyContainer: {
    width: '100%',
    marginBottom: 20,
    // Añade estilos para el contenedor del historial
  },
});
