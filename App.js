import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/emsi.png')}
        style={styles.logo}
        
        resizeMode="contain"
      />
      <Text style={styles.schoolName}>EMSI ORANGERS</Text>

      <View style={styles.info}>
  <Text style={styles.label}>Nom : <Text style={styles.value}>Karrach</Text></Text>
  <Text style={styles.label}>Prénom : <Text style={styles.value}>Reda</Text></Text>
  <Text style={styles.label}>Année universitaire : <Text style={styles.value}>2025 / 2026</Text></Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  schoolName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 30,
    letterSpacing: 1,
    textAlign: 'center',
  },
  info: {
    alignItems: 'flex-start',
    gap: 15,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 300,
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});
