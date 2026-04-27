import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../sreens/Home'

export type AppStackParamList = {
  Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: true,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}