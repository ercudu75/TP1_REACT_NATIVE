import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 20,
    letterSpacing: 1,
    },
  info: {
    alignItems: 'center',
    gap: 8,
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

  export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/emsi.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.schoolName}>EMSI MAARIF</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Nom: <Text style={styles.value}>TENSAOUI</Text></Text>
          <Text style={styles.label}>Prénom: <Text style={styles.value}>ALI</Text></Text>
          <Text style={styles.label}>Année universitaire: <Text style={styles.value}>2025 / 2026</Text></Text>
        </View>
      </View>
    );
  }


