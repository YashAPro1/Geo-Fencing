import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert,SafeAreaView } from 'react-native';
import Menu from './Menu';
export default function Home() {
  return (
    <View>
      <View>
      <Text>Hi there!!</Text>
      </View>
      
        <View style={styles.container}>
            <Text>Home Content here</Text>
            <TouchableOpacity style={styles.button} onPress={Map}>
                <Text style={styles.buttonText}>Getting Started</Text>
            </TouchableOpacity>
        </View>
        

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}/>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}/>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF6ED',
  },
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
button: {
    backgroundColor: '#8080FF',
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});