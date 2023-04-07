import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, Alert } from 'react-native';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignUp = () => {
    Alert.alert('Sign Up Successful');
    navigation.navigate('Login');
  };

  const goback = () =>{
    navigation.navigate('Login');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
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
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText} onPress={goback}>Already have an account? Log in</Text>
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
    // backgroundColor: 'rgb(255, 132, 132)',
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
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: '#8080FF',
    fontWeight: 'bold',
  },
});

export default SignUp;
