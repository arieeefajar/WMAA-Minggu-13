import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface KartuProfilProps {
  nama: string;
  jabatan: string;
}

export default function KartuProfil({ nama, jabatan }: KartuProfilProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.jabatan}>{jabatan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16 },
  nama: { fontSize: 18, fontWeight: 'bold' },
  jabatan: { fontSize: 14, color: '#666' },
});
