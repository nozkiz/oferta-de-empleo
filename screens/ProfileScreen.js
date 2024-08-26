import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qY5iy_ZrMj6vcRVPHHps2Pq4-xfLCSzMSd7Au6WNJ9wva1U4stGIw2z4IGOiVcDwPBA&usqp=CAU' };

const HojaDeVida = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://c0.klipartz.com/pngpicture/507/702/gratis-png-icono-de-perfil-icono-de-usuario-simple.png',
            }}
          />
          <Text style={styles.title}>Hoja de Vida</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos Personales</Text>
          <Text style={styles.text}>Nombre: Jaime Fernandez</Text>
          <Text style={styles.text}>Fecha de Nacimiento: 27/04/2005</Text>
          <Text style={styles.text}>Email: abril27fernandez@gmail.com</Text>
          <Text style={styles.text}>Teléfono: (321) 460-5139</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos Académicos</Text>
          <Text style={styles.text}>Bachiller Técnico Colegio Jaime Pardo Leal</Text>
          <Text style={styles.text}>2019-2022 Técnico en Programación de Software</Text>
          <Text style={styles.text}>2023-2024 Tecnólogo en Programación</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre mí</Text>
          <Text style={styles.text}>
            Tengo 19 años de edad, me gusta todo aquello que está enfocado a la tecnología, me considero una persona autónoma,
            responsable y leal a mis principios, tengo diversas habilidades en el área de programación.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text style={styles.text}>• JavaScript, Python, SQL</Text>
          <Text style={styles.text}>• Informática básica de hardware</Text>
          <Text style={styles.text}>• Cisco Packet Tracer</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
});

export default HojaDeVida;
