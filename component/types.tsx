// types.ts
import { RouteProp} from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

// Define los nombres de las pantallas disponibles en tu aplicación
export type RootStackParamList = {
  WelcomeScreen: undefined;
  StartScreen: undefined;
  RegistroScreen: undefined;
  CategoriasScreen: undefined;
  CartasScreen: { totalcards: number };
  PerfilScreen: undefined;
  HistorialScreen: undefined;
  ConfiguracionScreen: undefined;
};

// Define los tipos para las propiedades de navegación y de ruta
 export type NavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;
export type RouteProp<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
