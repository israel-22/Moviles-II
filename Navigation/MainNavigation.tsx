import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen'
import CategoriasScreen from '../screens/CategoriasScreen'
// STACK
export type RootStackParamList = {
    StartScreen:undefined,
    CategoriasScreen:undefined,
  
  }
  const Stack = createStackNavigator<RootStackParamList >();
function MyStack() {
    return (
     <Stack.Navigator>
         <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown:false}}/>
         <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={{headerShown:false}}/>
     </Stack.Navigator>
    )
}

export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})