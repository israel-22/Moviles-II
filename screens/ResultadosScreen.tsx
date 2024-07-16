import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CategoriasScreen'>;
};

const CategoriasScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'animals', image: require('../assets/animal.jpg') },
    { id: 'fruits', image: require('../assets/fruta.jpg') },
    { id: 'vehicles', image: require('../assets/vehiculo.png') },
  ];

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleContinuePress = () => {
    if (!selectedLevel || !selectedCategory) {
      Alert.alert('Error', 'Por favor selecciona un nivel y una categoría para continuar.');
    } else {
      navigation.navigate('CartasScreen', { level: selectedLevel, category: selectedCategory });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un nivel</Text>
      <View style={styles.buttonsContainer}>
        <Button title='Fácil' onPress={() => handleLevelSelect('easy')} />
        <Button title='Medio' onPress={() => handleLevelSelect('medium')} />
        <Button title='Difícil' onPress={() => handleLevelSelect('hard')} />
      </View>
      <Text style={styles.title}>Seleccione una categoría</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} onPress={() => handleCategorySelect(category.id)}>
            <Image source={category.image} style={styles.categoryImage} />
          </TouchableOpacity>
        ))}
      </View>
      <Button title='Continuar' onPress={handleContinuePress} />
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

export default CategoriasScreen;
