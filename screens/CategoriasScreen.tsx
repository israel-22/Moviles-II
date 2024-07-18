import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

//Props
export type RootStackParamList = {
  CategoriasScreen: undefined;
  MyTabs: { dato: number };
}

type CategoriasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoriasScreen'>;

type Props = {
  navigation: CategoriasScreenNavigationProp;
};

export default function CategoriasScreen({ navigation }: Props) {
  const Niveles = (dato: number) => {
    navigation.navigate('MyTabs', { dato });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backNiveles.jpg')} style={styles.ImgBack}>
        <View style={styles.img}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Seleccione un nivel</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.btnRegister} onPress={() => Niveles(8)}>
            <Text style={styles.txt}>FÁCIL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={() => Niveles(12)}>
            <Text style={styles.txt}>MEDIO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={() => Niveles(16)}>
            <Text style={styles.txt}>DIFÍCIL</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  btnRegister: {
    backgroundColor: 'blue',
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
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  ImgBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  img: {
    alignItems: 'center',
    width: 20,

  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: 20,
    textDecorationColor: 'black',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
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
