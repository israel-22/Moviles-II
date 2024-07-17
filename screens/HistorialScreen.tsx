import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HistorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Juegos</Text>
      <View style={styles.historyContainer}>
        {/* Aquí puedes añadir componentes para mostrar el historial de juegos */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyContainer: {
    width: '100%',
    marginBottom: 20,
    // Añade estilos para el contenedor del historial
  },
});
