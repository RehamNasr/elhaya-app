import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import * as Const from "../Constant/Const"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth_Screen from './Auth_Screen';
import Home_Screen from './Home_Screen';
import { AuthContext } from '../pages/createContext';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  const [isLoading, setIsLoading] = useState(false);
  const [islogin, setIslogin] = useState(false);
 
  const login = () => {
    setIsLoading(true);
    setIslogin(true)
    AsyncStorage.setItem("login", 'true');
    setIsLoading(false);
  }

  const logout = () => {
    setIsLoading(true);
    setIslogin(false)
    AsyncStorage.removeItem("login");
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let login = await AsyncStorage.getItem("login");
      setIslogin(login);
      setIsLoading(false);
    } catch (e) {
      console.log('islogged in error ${e}')
    }

  }

  useEffect(() => {
    isLoggedIn();
  }, []);





  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
        <ActivityIndicator size={"large"} color={Const.color}></ActivityIndicator>
      </View>
    );

  }
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, login }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {!islogin ? (

            <Stack.Screen name="Auth_Screen" component={Auth_Screen}
              options={{
                // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <>
              <Stack.Screen name="Home_Screen" component={Home_Screen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
}