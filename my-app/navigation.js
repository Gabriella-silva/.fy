import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreens.js';
import HomeScreen from './screens/WelcomeScreens.js';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Define a tela inicial
        screenOptions={{
          headerShown: false, // Remove os headers padrão
          animation: 'slide_from_right', // Melhora transições no Android
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}