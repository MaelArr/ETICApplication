import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingApp from "./Navigation/LoadingApp"
import Travmeejoy from "./Navigation/Travmeejoy";
import LogIn from "./Navigation/LogIn";
import SignIn from "./Navigation/SignUp";
import CreationProfil from "./Navigation/CreationProfil";
import CreationProfilSlides from "./Navigation/CreationProfilSlides";
import Home from './Navigation/Home';
import Profil from './Navigation/Profil';
import ChatExample from './Navigation/ChatExample';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialState="Travmeejoy">
        <Stack.Screen name="Travmeejoy" component={Travmeejoy} />
        <Stack.Screen name="LoadingApp" component={LoadingApp} /> 
        <Stack.Screen name="LogIn" component={LogIn} /> 
        <Stack.Screen name="SignIn" component={SignIn} />  
        <Stack.Screen name="CreationProfil" component={CreationProfil} />
        <Stack.Screen name="CreationProfilSlides" component={CreationProfilSlides} /> 
        <Stack.Screen name="Home" component={Home} />  
        <Stack.Screen name="Profil" component={Profil} />   
        <Stack.Screen name="ChatExample" component={ChatExample} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
