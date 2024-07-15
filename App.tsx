import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import Navegador from './Navigation/MainNavigation';
import RegistroScreen from './screens/RegistroScreen';

export default function App() {
  return (

 <Navegador/>


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
