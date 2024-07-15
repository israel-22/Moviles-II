
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RegistroScreen({navigation}:any) {
  return (
    <View style={styles.container}>

<View>
      <Text>RegistroScreen</Text>
    </View>
     <TouchableOpacity style={styles.btnRegister} onPress={()=>navigation.navigate("Welcome")}>
     <Text style={styles.txt}>Regresar</Text>
   </TouchableOpacity>
    </View>
    
  )
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
        fontSize: 20,
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