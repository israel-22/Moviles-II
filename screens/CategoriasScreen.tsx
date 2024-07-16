import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navegador from '../Navigation/MainNavigation';
import { set } from 'firebase/database';

export default function CategoriasScreen({navigation}:any) {
 const niveles=(totalcards:number)=>{
  navigation.navigate('MyTabs',{totalcards})
 }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un nivel</Text>
      <View style={styles.buttonsContainer}>
        <Button title='Fácil' onPress={()=>niveles(8)} />
        <Button title='Medio' onPress={()=>niveles(12)}/>
        <Button title='Difícil' onPress={()=>niveles(24)} />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '80%',
    justifyContent: 'space-around',
    height: 200,
  },
  categoriesContainer: {
    width: '80%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
