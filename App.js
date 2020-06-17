import React from 'react';
import {
  View
} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './app/pages/Home';
import ColorMode from './app/pages/ColorMode';
import AnimationMode from './app/pages/AnimationMode';
import Settings from './app/pages/Settings';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5bc0de',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'left'
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{title: "Accueil"}}/>
        <Stack.Screen name="ColorMode" component={ColorMode} options={{title: "Mode Couleur"}}/>
        <Stack.Screen name="AnimationMode" component={AnimationMode} options={{title: "Mode Animation"}}/>
        <Stack.Screen name="Settings" component={Settings} options={{title: "Paramètres"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
