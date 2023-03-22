import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, Alert, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
  });

  const handleLogin = () => {
    Alert.alert('Login Successful');
    navigation.navigate('Home');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.backImage} 
          source={{url: "https://developers.google.com/location-context/geofencing"}} />
        <View style={styles.card}>
        <Text style={styles.title}>Geo-Fencing</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.visibilityButton} onPress={togglePasswordVisibility}>
            <Text style={styles.visibilityButtonText}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    position: "absolute", 
    flex: 1,
    width: 100, 
    height: 100,
  },
  card: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor: "rgb(229, 229, 229)",
    borderWidth: 5,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "rgb(250, 250, 250)",
  },
  title: {
    fontSize: 40,
    // fontFamily: "Ubuntu",
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#8080FF',
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    // left: -5,
    marginBottom: 10,
    borderRadius: 5,
    
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  visibilityButton: {
    padding: 10,
  },
  visibilityButtonText: {
    color: '#8080FF',
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
  signUpButton: {
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#8080FF',
    fontWeight: 'bold',
  },
});

export default Login;
