import React, { useState } from 'react';
import { Image, Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../config/Config';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { ref as databaseRef, refFromURL, set } from "firebase/database";
import { ImageBackground } from 'react-native';


export default function PerfilScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const Galeria = async () => {
    // No permissions request is necessary for launching the image library 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //Camara
  const Camara = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const cancel = () => {
    setImage(require('../assets/animal.jpg'))
  }
  //Opción de selección 
  const img = () => {
    Alert.alert(
      "Opciones",
      "Escoge una opción",
      [
        {
          text: "Galería",
          onPress: Galeria,
        },
        {
          text: "Cámara",
          onPress: Camara
        },
        {
          text: "Cancelar",
          onPress: cancel
        },
      ],
    );
  }
  //Enviar a firebase
  const subir = async () => {
    if (!image) {
      Alert.alert("Error", "No se ha seleccionado ninguna imagen");
      return;
    }

    setUploading(true);
    const response = await fetch(image);
    const blob = await response.blob();

    const storageRef = ref(storage, `profile/${new Date().getTime()}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        // Handle error
        Alert.alert("Error", "Error al subir la imagen");
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          Alert.alert("Información", "Perfil creado con Exito");
          setUploading(false);
          // Guardar los datos en Firebase Database
          set(databaseRef(db, 'profilesGames/' + pin), {
            username: name,
            profile_picture: downloadURL
          });
        });
      }
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Bperfil.jpg')} style={styles.ImgBack}>
        <Text style={styles.title}>Perfil del Jugador</Text>
        <View style={styles.infoContainer}>

          <View style={styles.containerImg}>
            <TouchableOpacity onPress={img}>

              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : (<Image source={require('../assets/user.png')} style={styles.profileImage} />)}

            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Nombre jugador:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>PIN:</Text>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={setPin}
            keyboardType="numeric"
          />

        </View>
        <TouchableOpacity style={styles.btnStart} onPress={subir} disabled={uploading}>
          <Text style={styles.txt}>{uploading ? 'Creando...' : 'Crear Perfil'}</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
    padding: 30

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
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  btnStart: {
    backgroundColor: '#3c59ea',
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    alignItems: 'center',
    marginBottom: 2,
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
    fontWeight: 'bold',
  },
  containerImg: {
    alignItems: 'center'
  }
})