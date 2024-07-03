import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function () {
const [name, setName] = useState('');

const handleInputChange = (text:string) =>{
setName(text);
};
const handleStartPress = () =>{
  if (name.trim()=='') {
    Alert.alert('Error','Por favor ingresa tu nombre para empezar');
    
  }else{
    Alert.alert('Bienvenido',`Hola ${name}, ¡comienza el juego!`);
    setName('')
  }
    };
    

    return (
        <View>
            <Text style={styles.title}> Pair Puzzel</Text>
            <View>
                <TextInput style={styles.input} placeholder='Ingresa tu nombre Aqui!!' onChangeText={handleInputChange} value={name} />
                <Button title='Empezar' onPress={handleStartPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        marginBottom: 5,
        width: 300,
        height: 35,
        textAlign: 'center',
        borderRadius:10
    },

    title: {
        textAlign: 'center',
        position: 'absolute',
        top: -100,
        width: 200,
        padding: 10,
        left: 45,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green'
    },

    btn:{
        borderRadius:10
    }
})