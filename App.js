import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/Home';
import Result from './src/views/Result';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, animationEnabled:false}}/>
        <Stack.Screen name="Result" component={Result} options={{headerShown: false, animationEnabled:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
