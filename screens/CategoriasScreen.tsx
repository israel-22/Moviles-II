import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

//Props
export type RootStackParamList={
  CategoriasScreen: undefined;
  MyTabs: { dato : number };
}

type CategoriasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoriasScreen'>;

type Props = {
  navigation: CategoriasScreenNavigationProp;
};

export default function CategoriasScreen({navigation}:Props) {
  const Niveles = (dato:number ) => {
    navigation.navigate('MyTabs',{dato});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un nivel</Text>
      <View style={styles.buttonsContainer}>
      <Button title='Fácil' onPress={() =>Niveles(8)} />
        <Button title='Medio' onPress={()=>Niveles(12)}/>
        <Button title='Difícil' onPress={()=>Niveles(20)} />
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
