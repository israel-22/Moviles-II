import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import CategoriasScreen from '../screens/CategoriasScreen';
import CartasScreen from '../screens/CartasScreen';
import ResultadosScreen from '../screens/ResultadosScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} />
        <Stack.Screen name="CartasScreen" component={CartasScreen} />
        <Stack.Screen name="ResultadosScreen" component={ResultadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
