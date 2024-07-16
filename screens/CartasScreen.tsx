import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CartasScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { level, category } = route.params as { level: string; category: string };
  const [cards, setCards] = useState<string[]>([]); // Ajusta el tipo de cards según lo que contenga

  useEffect(() => {
    const initializeCards = () => {
      // Implementa aquí la lógica para inicializar las cartas según el nivel y la categoría
      // Por ejemplo, cargar diferentes imágenes según la categoría seleccionada
    };

    initializeCards();
  }, [level, category]);

  const handleCardPress = (index: number) => {
    // Lógica para manejar la selección de cartas
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nivel: {level}</Text>
      <Text style={styles.subtitle}>Categoría: {category}</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Button key={index} title='Card' onPress={() => handleCardPress(index)} />
        ))}
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
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  cardsContainer: {
    width: '80%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default CartasScreen;
