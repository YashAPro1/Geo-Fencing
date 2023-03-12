import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();
  return (
    

   
      <ImageBackground
        source={require('../assets/bg1.png')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          {/* <Text style={styles.title}>Geo-Fencing</Text> */}
          <TouchableOpacity 
            onPress={() => navigation.navigate("Signup")}
            >

            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'black',
      marginTop: '-25%',
      marginLeft: '20%'
    },
    signup: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '50  %'
    },
    login: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%',
      marginBottom:50
    },
    title: {
      fontSize: 37,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#8080FF',
    },
});