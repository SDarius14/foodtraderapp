import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login/Login';
import ProductList from '@/screens/ProductList/ProductList';
import ProductView from '@/screens/ProductView/ProductView';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ProductList} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
