import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen'
import CategoriasScreen from '../screens/CategoriasScreen'
import CartasScreen from '../screens/CartasScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegistroScreen from '../screens/RegistroScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PerfilScreen from '../screens/PerfilScreen';
import HistorialScreen from '../screens/HistorialScreen';
import ConfiguracionScreen from '../screens/ConfiguracionScreen';



  const Stack = createStackNavigator();

function MyStack() {
    return (
     <Stack.Navigator>
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>  */}
         {/* <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown:false}}/>
         <Stack.Screen name="RegistroScreen" component={RegistroScreen} options={{headerShown:false}}/>  */}
         <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={{headerShown:false}}/>
         <Stack.Screen name="CartasScreen" component={CartasScreen} options={{headerShown:false}}/>
         <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
     </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Juego"
      activeColor="#035096"
      inactiveColor="#560c0e"
      barStyle={{backgroundColor:'lightgrey' }}
    >
           <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
                }}
      />

         <Tab.Screen
        name="Juego"
        component={CartasScreen}
        options={{
          tabBarLabel: 'Jugar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={26} />
          ),
        
        }}
    
      />
        <Tab.Screen
        name="Historial"
        component={HistorialScreen}
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timetable" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="config"
        component={ConfiguracionScreen}
        options={{
          tabBarLabel: 'configuración',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
                }}
      />
    </Tab.Navigator>
  );
}


export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
