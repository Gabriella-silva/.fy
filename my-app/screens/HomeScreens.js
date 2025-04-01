import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MapPin, Search, Sliders } from '../node_modules/lucide-react-native'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/** SearchBar */}
      <View style={styles.searchBar}>
        <Search height={25} width={25} stroke="gray" /> 
        <TextInput placeholder="Musicas" style={styles.textInput} />
        <View style={styles.locationContainer}>
          <MapPin height={20} width={20} stroke="gray" /> 
          <Text style={styles.locationText}>Descruba sua próxima música </Text>
        </View>
      </View>
      <View style={styles.filterButton}>
        <Sliders height={20} width={20} strokeWidth={2.5} stroke="white" /> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: 'gray',
    paddingLeft: 8,
  },
  locationText: {
    color: 'gray',
  },
  filterButton: {
    padding: 12,
    backgroundColor: 'gray',
    borderRadius: 9999, 
  },
});