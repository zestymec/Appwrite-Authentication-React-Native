import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../sreens/Home';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

export type AppStackParamlist ={
Home : undefined;
}

const Stack = createNativeStackNavigator<AppStackParamlist>();


const AppStack = () => {
  return (
    <View>
      <Text>AppStack</Text>
    </View>
  )
}

export default AppStack

const styles = StyleSheet.create({})