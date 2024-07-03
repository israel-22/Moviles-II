import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CartasScreen() {
  return (
    <View  style={styles.container}>
      <Text style={styles.txt}>CartasScreen</Text>
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

})