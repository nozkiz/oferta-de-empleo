import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Card, useTheme } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (name && email && password) {
      try {
        // Aquí iría la lógica de registro real con su API
        // Nota: Ya no guardamos el token aquí
        navigation.navigate('Login'); // Cambiado de 'Home' a 'Login'
      } catch (e) {
        setError('Error al registrarse. Por favor, intente de nuevo.');
      }
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card containerStyle={styles.card}>
        <Card.Title h4>Registrarse</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Nombre"
          leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.primary }}
          onChangeText={setName}
          value={name}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: theme.colors.primary }}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          placeholder="Contraseña"
          leftIcon={{ type: 'font-awesome', name: 'lock', color: theme.colors.primary }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {error ? <Text style={[styles.errorText, { color: theme.colors.error }]}>{error}</Text> : null}
        <Button 
          title="Registrarse" 
          onPress={handleRegister} 
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]} 
        />
        <Button 
          title="¿Ya tienes cuenta? Inicia sesión" 
          onPress={() => navigation.navigate('Login')} 
          type="clear"
          titleStyle={{ color: theme.colors.primary }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});