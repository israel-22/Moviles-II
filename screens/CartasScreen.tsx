import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'

const availableCards: string[] = ['A', 'K', 'Q', 'J'];

interface Card {
  id: number;
  value: string;
  isActive: boolean;
  isMatched: boolean;
}

export default function CartasScreen() {
  const ruta = useRoute()
  const { dato }:any = ruta.params


  //const { totalcards } = route.params;
  const totalcards = dato;

  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [currentAttempts, setCurrentAttempts] = useState<number>(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const pairs = totalcards / 2;
    let initialCards: Card[] = [];
    let valuesUsed: string[] = [];

    for (let i = 0; i < pairs; i++) {
      const cardValue = availableCards[i % availableCards.length];
      valuesUsed.push(cardValue, cardValue); // Añade dos cartas del mismo valor
    }

    valuesUsed = shuffleArray(valuesUsed); // Mezcla las cartas

    for (let i = 0; i < totalcards; i++) {
      initialCards.push({
        id: i,
        value: valuesUsed[i],
        isActive: false,
        isMatched: false,
      });
    }

    setCards(initialCards);
    setCurrentAttempts(0); // Reiniciar el contador de intentos
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const activate = (id: number) => {
    if (currentMove < 2) {
      const updatedCards = cards.map((card) => {
        if (card.id === id && !card.isActive && !card.isMatched) {
          card.isActive = true;
          const newSelectedCards = [...selectedCards, card];
          setSelectedCards(newSelectedCards);
          setCurrentMove(currentMove + 1);

          if (newSelectedCards.length === 2) {
            setCurrentAttempts(currentAttempts + 1);

            if (newSelectedCards[0].value === newSelectedCards[1].value) {
              const matchedCards = cards.map(c => {
                if (c.id === newSelectedCards[0].id || c.id === newSelectedCards[1].id) {
                  c.isMatched = true;
                }
                return c;
              });
              setCards(matchedCards);
              // Verificar si todas las cartas han sido emparejadas
              if (matchedCards.every(card => card.isMatched)) {

                Alert.alert(
                  "Fin del Juego",
                  " 🎊 Felicidades has Ganado 🎉  " + `Número de intentos: ${currentAttempts + 1}`,
                  [{ text: "OK", onPress: initializeGame }]
                );
              }

              setSelectedCards([]);
              setCurrentMove(0);
            } else {
              setTimeout(() => {
                const resetCards = updatedCards.map(c => {
                  if (!c.isMatched) {
                    c.isActive = false;
                  }
                  return c;
                });
                setSelectedCards([]);
                setCurrentMove(0);
                setCards(resetCards);
              }, 1000);
            }
          }
        }
        return card;
      });

      if (updatedCards) {
        setCards(updatedCards);
      } else {
        console.error("updatedCards is not defined");
      }
    }
  };

  const handleShowAttempts = () => {
    Alert.alert(
      "Intentos Realizados",
      `Número de intentos: ${currentAttempts}`,
      [{ text: "OK", onPress: initializeGame }]
    );
  };


  return (
    <View style={styles.container}>
      {/* <Text style={styles.stats}>{dato}</Text> */}
      <Text style={styles.stats}>{currentAttempts} intentos</Text>
      <View style={styles.game}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={styles.card}
            onPress={() => activate(card.id)}
          >
            <View style={[styles.cardInner, card.isActive && styles.cardActive]}>
              <View style={[styles.cardFace, card.isActive && styles.cardFaceActive]}>
                <Text style={styles.cardText}>{card.value}</Text>
              </View>
              {!card.isActive && <Image source={require('../assets/back.png')} style={styles.cardBack} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Mostrar Intentos" onPress={handleShowAttempts} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '25%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    width: '45%'
  },
  txt: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },

  img: {
    width: '100%',
    height: '50%',
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  stats: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },
  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 80,
    height: 120,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05d1fe',
    backfaceVisibility: 'hidden',
  },
  cardActive: {
    transform: [{ rotateY: '180deg' }],
  },
  cardInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cardFace: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05d1fe',
    borderRadius: 10,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  cardFaceActive: {
    zIndex: 1,
  },
  cardBack: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray',
    borderWidth: 3,
    borderColor: '#05d1fe',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 24,
    color: 'black',
  },

})