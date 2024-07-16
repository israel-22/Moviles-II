import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from '../Components/Cards'
import { StatusBar } from 'expo-status-bar'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function CartasScreen() {
  return (
    <View style={styles.container}>
     <Cards/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
