import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, Alert } from 'react-native';

export default function ConfiguracionScreen({ navigation }: any) {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn(previousState => !previousState);
  };

  const handleLogout = () => {
    Alert.alert(
      "Salir",
      "¿Estás seguro de que deseas salir?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Salir",
          onPress: () => navigation.navigate('WelcomeScreen')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Sonido</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSoundOn ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSound}
          value={isSoundOn}
        />
      </View>
      {/* <Button title="Salir" onPress={handleLogout} /> */}
      <Button title="Salir" onPress={()=>navigation.navigate('StartScreen')} />
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id eros a justo interdum malesuada.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
  loremText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
