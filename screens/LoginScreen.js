import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-elements';

export default function LoginScreen({ navigation }) {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loginUser = async () => {
      try {
        // Simula el proceso de autenticación y redirige a la pantalla de inicio
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
        navigation.navigate('Home');
      } catch (e) {
        setError('Error al iniciar sesión. Por favor, intente de nuevo.');
      } finally {
        setLoading(false); // Deja de mostrar el indicador de carga
      }
    };

    loginUser();
  }, [navigation]);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[styles.statusText, { color: theme.colors.text }]}>
          Iniciando sesión...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.error }]}>{error}</Text>
        <Button
          title="Reintentar"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
        />
      </View>
    );
  }

  return null; // En caso de que todo esté correcto, no renderiza nada
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    marginTop: 20,
  },
});
