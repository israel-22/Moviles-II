import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen'
import CategoriasScreen from '../screens/CategoriasScreen'
import CartasScreen from '../screens/CartasScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

  const Stack = createStackNavigator();

function MyStack() {
    return (
     <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/> 
         <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown:false}}/>
         <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={{headerShown:false}}/>
         <Stack.Screen name="CartasScreen" component={CartasScreen} options={{headerShown:false}}/>
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
