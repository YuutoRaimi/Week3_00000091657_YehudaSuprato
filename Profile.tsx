import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProfileProps {
  name: string;
  age: number;
}

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.text}>Halo Namaku, {name}!</Text>
      <Text style={styles.text}>Umurku, {age} tahun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
    color: '#333',
  },
});

export default Profile;