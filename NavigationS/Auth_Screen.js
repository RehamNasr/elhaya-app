import React, { useState, useEffect } from 'react';
import Slider1 from '../pages/Slider1'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Pass1 from '../pages/Pass1'
import Pass2 from '../pages/Pass2'
import Pass3 from '../pages/Pass3'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Auth_Stack = createNativeStackNavigator();
export default function Auth_Screen({ navigation }) {
  return (
    <Auth_Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Auth_Stack.Screen name="Slider1" component={Slider1} />
    <Auth_Stack.Screen name="Login" component={Login} />
    <Auth_Stack.Screen name="Signup" component={Signup} />
    <Auth_Stack.Screen name="Pass1" component={Pass1} />
    <Auth_Stack.Screen name="Pass2" component={Pass2} />
    <Auth_Stack.Screen name="Pass3" component={Pass3} />
  </Auth_Stack.Navigator>
  );
}
