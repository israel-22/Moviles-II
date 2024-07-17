import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function PerfilScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    // Aquí puedes añadir la lógica para guardar los datos del perfil
    //firebase
    alert('Perfil guardado exitosamente');
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Perfil de Usuario</Text>
    <View style={styles.infoContainer}>
      <View style={styles.containerImg}>
      <TouchableOpacity>
      <Image source={require('../assets/animal.jpg')} style={styles.profileImage} />
      </TouchableOpacity>
      </View>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
      />
      <Text style={styles.label}>Correo Electrónico:</Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
      />
      <Text style={styles.label}>Teléfono:</Text>
      <TextInput 
        style={styles.input} 
        value={phone} 
        onChangeText={setPhone} 
        keyboardType="phone-pad" 
      />
      <Text style={styles.label}>Dirección:</Text>
      <TextInput 
        style={styles.input} 
        value={address} 
        onChangeText={setAddress} 
      />
    </View>
    <TouchableOpacity style={styles.btnStart}>
        <Text style={styles.txt}>Actualizar Perfil</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
   
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
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
containerImg:{
  alignItems:'center'
}
})