import ProductDetails from '../screens/PDP/ProductDetails';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   <Stack.Navigator>
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  )
}