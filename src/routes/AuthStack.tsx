import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signup from '../sreens/Signup'
import Login from '../sreens/Login'

export type AppStackParamList = {
  Login: undefined;
    Signup: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: true,
      }}
    >
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}