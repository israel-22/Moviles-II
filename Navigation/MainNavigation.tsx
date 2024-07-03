import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen'
import CategoriasScreen from '../screens/CategoriasScreen'
// STACK
const Stack = createStackNavigator()
function MyStack() {
    return (
     <Stack.Navigator>
         <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown:true}}/>
         <Stack.Screen name="Categoria" component={CategoriasScreen}/>
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