// 
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const FarmerDetailScreen = () => {
//   const totalLandArea = farmer.fields.reduce((total, field) => total + field.area, 0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Farmer Details</Text>
        <Text style={styles.subtitle}>Name:</Text>
        <Text style={styles.detail}>{'Somaiya'}</Text>
        <Text style={styles.subtitle}>Age:</Text>
        <Text style={styles.detail}>{'20'}</Text>
        <Text style={styles.subtitle}>Total Land Area:</Text>
        <Text style={styles.detail}>{'1000'} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FarmerDetailScreen;
