import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window'); // Obtener el ancho de la ventana para un diseño adaptable

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error("Error removing user token:", error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image
        source={require('../assets/sena_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>Bienvenido a SENA Empleos</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: theme.colors.primary }]}
          onPress={() => navigation.navigate('JobSearch')}
        >
          <Text style={[styles.cardText, { color: theme.colors.white }]}>Buscar Empleos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: theme.colors.secondary }]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={[styles.cardText, { color: theme.colors.white }]}>Mi Hoja de Vida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: theme.colors.info }]}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={[styles.cardText, { color: theme.colors.black }]}>Acerca de</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: theme.colors.error }]}
          onPress={handleLogout}
        >
          <Text style={[styles.cardText, { color: theme.colors.white }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: width * 0.6, // Usar un porcentaje del ancho de la ventana para hacer el diseño adaptable
    height: width * 0.3, // Mantener la proporción de la imagen
    marginBottom: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '700',
    color: '#333',
  },
  grid: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly', // Asegura un espacio uniforme entre los elementos
  },
  card: {
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Mejora la sombra para un efecto más realista
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginHorizontal: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
