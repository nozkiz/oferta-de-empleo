import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Image, useTheme } from 'react-native-elements';

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card containerStyle={[styles.card, { backgroundColor: theme.colors.card }]}>
        <View style={styles.header}>
          <Image
            source={require('../assets/sena_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Card.Title h3 style={{ color: theme.colors.text }}>Acerca de SENA Empleos</Card.Title>
        </View>
        <Card.Divider />
        <Text style={[styles.text, { color: theme.colors.text }]}>
          SENA Empleos es una plataforma diseñada para conectar a los aprendices y egresados del Servicio Nacional de Aprendizaje (SENA) con oportunidades laborales en todo Colombia.
        </Text>
        <Text style={[styles.text, { color: theme.colors.text }]}>
          Nuestra misión es facilitar la inserción laboral de los profesionales formados por el SENA, contribuyendo al desarrollo económico y social del país.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
  },
});
