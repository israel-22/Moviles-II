import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from '../Components/Cards'

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