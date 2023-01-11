// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Disclaimer from './src/screen/Disclaimer';
import SelectStation from './src/screen/SelectStation';
import Details from './src/screen/Details';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
        <Stack.Screen name="SelectStation" component={SelectStation} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;