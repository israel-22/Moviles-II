import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

//Props
export type RootStackParamList={
  CategoriasScreen: undefined;
  MyTabs: { totalcards: number };
}

type CategoriasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoriasScreen'>;

type Props = {
  navigation: CategoriasScreenNavigationProp;
};

export default function CategoriasScreen({navigation}:Props) {
  const Niveles = (totalcards: number) => {
    navigation.navigate('MyTabs', { totalcards });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un nivel</Text>
      <View style={styles.buttonsContainer}>
      <Button title='Fácil' onPress={() =>navigation.navigate('MyTabs',{dato:8})} />
        <Button title='Medio' onPress={()=>navigation.navigate('MyTabs',{dato:16})}/>
        <Button title='Difícil' onPress={()=>navigation.navigate('CartasScreen',{dato:20})} />
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
