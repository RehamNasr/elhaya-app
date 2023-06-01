import React, { useState, useEffect } from 'react';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Analysis from '../pages/analysis'
import Chat from '../pages/Chat'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from '../pages/Info';
const Home_Stack = createNativeStackNavigator();
export default function Home_Screen({ navigation }) {
  return (
    <Home_Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Home_Stack.Screen name="Home" component={Home} />
    <Home_Stack.Screen name="Profile" component={Profile} />
    <Home_Stack.Screen name="Analysis" component={Analysis} />
    <Home_Stack.Screen name="Chat" component={Chat} />
    <Home_Stack.Screen name="Info" component={Info} />
  </Home_Stack.Navigator>
  );
}
