import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import JobSearchScreen from './screens/JobSearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: '#39A900',
    secondary: '#006F36',
    background: '#F2F2F7',
    text: '#333333',
    error: '#FF3B30',
  },
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication", error);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
              <Stack.Screen name="JobSearch" component={JobSearchScreen} options={{ title: 'Buscar Empleos' }} />
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
              <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Acerca de' }} />
            </>
          ) : (
            <>
              <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
