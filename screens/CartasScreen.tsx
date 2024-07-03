import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CartasScreen() {
  return (
    <View  style={styles.container}>
      <Text style={styles.txt}>CartasScreen</Text>
      <Image style={styles.img} source={require('../assets/pares.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
txt:{
    textAlign: 'center',
    color:'red',
    fontSize:20,
},
container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: '100%',
    height: '50%',
    margin: 10,
  }

})