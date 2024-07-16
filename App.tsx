import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import CategoriasScreen from './screens/CategoriasScreen';
import CartasScreen from './screens/CartasScreen';
import ResultadosScreen from './screens/ResultadosScreen';
import { RootStackParamList } from './navigation/types'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="StartScreen">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} />
          <Stack.Screen name="CartasScreen" component={CartasScreen} />
          <Stack.Screen name="ResultadosScreen" component={ResultadosScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
