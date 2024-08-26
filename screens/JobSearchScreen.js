import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { SearchBar, ListItem, Text, useTheme } from 'react-native-elements';

const mockJobs = [
  { id: '1', title: 'Desarrollador Frontend', company: 'Innovatech', location: 'Bogotá', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczi-fI3I9TCSfGqhuJVK15EIYd3rA-N04dw&s' },
  { id: '2', title: 'Ingeniero Backend', company: 'CodeMasters', location: 'Medellín', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUjavsuci00tQrGxCorvL5pwTjwses5NrhPRRRk59D0A-cCR40Pnc5gEo6v9Rxvgvv1Y&usqp=CAU' },
  { id: '3', title: 'Diseñador UX/UI', company: 'DesignWave', location: 'Cali', imageUrl: 'https://assets.isu.pub/document-structure/230706151721-c8153409a7dde3534c2a44993367fe6a/v1/cb15bd801085ee164a2cf83065a716fd.jpeg' },
  { id: '4', title: 'Analista de Datos', company: 'DataVision', location: 'Barranquilla', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DvjWilfdE2yNicxTFkDy9lYTo20UuPp1-Q&s' },
  { id: '5', title: 'Gerente de Proyectos', company: 'ProManage', location: 'Cartagena', imageUrl: 'https://www.hubspot.com/hs-fs/hubfs/media/lenguajesprogramacion.jpeg?width=595&height=400&name=lenguajesprogramacion.jpeg' },
];

export default function JobSearchScreen() {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState(mockJobs);

  const updateSearch = (search) => {
    setSearch(search);
    const filteredJobs = mockJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  const handleApply = (jobTitle) => {
    Alert.alert(
      'Enviar Hoja de Vida',
      `¿Desea enviar su hoja de vida para el puesto de ${jobTitle}?`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            Alert.alert('Aplicación Exitosa', `Su aplicación para el puesto de ${jobTitle} fue exitosa.`);
          },
        },
      ],
      { cancelable: false } // Evita que el usuario cierre la alerta tocando fuera de ella
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SearchBar
        placeholder="Buscar empleos..."
        onChangeText={updateSearch}
        value={search}
        platform="default"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <ListItem.Content>
              <ListItem.Title style={{ color: theme.colors.text }}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={{ color: theme.colors.text }}>{item.company} - {item.location}</ListItem.Subtitle>
            </ListItem.Content>
            <TouchableOpacity
              onPress={() => handleApply(item.title)}
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
            >
              <Text style={styles.buttonText}>Aplicar</Text>
            </TouchableOpacity>
          </ListItem>
        )}
        ListEmptyComponent={<Text style={[styles.emptyList, { color: theme.colors.text }]}>No se encontraron empleos</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInput: {
    backgroundColor: 'white',
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
