import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, Alert, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../config/Config';

export default function ConfiguracionScreen({ navigation }: any) {
  //Prueba Sonido
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    if (isSoundOn) {
      playSound();
    } else {
      stopSound();
    }
  }, [isSoundOn]);

  const playSound = async () => {
    try {
      if (!sound) {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/Hello.mp3')
        );
        setSound(sound);
      }
      console.log('Playing Sound');
      await sound?.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound) {
        console.log('Stopping Sound');
  
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(undefined);
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };

  const toggleSound = () => {

    if (isSoundOn) {
      setIsSoundOn(false);
    } else {
      setIsSoundOn(true);
    }

  };

  const handleLogout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
    navigation.navigate("Welcome")
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Config.jpg')} style={styles.ImgBack}>
        <View style={styles.optionContainer}>
          <Text style={styles.title}>Configuración</Text>
          <Text style={styles.optionText}>Sonido</Text>
          <Switch
            trackColor={{ false: "red", true: "green" }}
            thumbColor={isSoundOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3be"
            onValueChange={toggleSound}
            value={isSoundOn}
          />

        </View>

        <View style={styles.parraf}>
          <Text style={styles.loremText}>
            Creadores: Cristhofer Gramal e Israel Santos {"\n\n"}
            Especialidad: Desarrollo de Software{"\n\n"}
            Modulo: Aplicaciones Moviles 2

          </Text>
          <TouchableOpacity style={styles.btnRegister} onPress={playSound}>
            <Text style={styles.txt}>SONIDITO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRegister} onPress={handleLogout}>
            <Text style={styles.txt}>CERRAR SESIÓN</Text>
          </TouchableOpacity>

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
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 20
  },
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  parraf: {
    top: 250,
    padding: 10
  },
  ImgBack: {
    flex: 1,
    resizeMode: 'cover',

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
    backgroundColor: '#f5f5f5',
    top: 0

  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 2,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top: 250,
    padding: 10
  },
  optionText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 2,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,

  },
  loremText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 10,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    backgroundColor: 'rgba(135, 206, 235, 0.5)',
    borderRadius: 4,
    padding: 10
  },
});
