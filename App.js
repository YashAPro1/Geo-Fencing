import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import RandomColor from 'randomcolor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Map';
import Login from './Login';
import SignUp from './signup';
import Home from './home';

export default function App() {

  const stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name='Login' component={Login}/>

        <stack.Screen name='Map' component={Map}/>

        <stack.Screen name='Signup' component={SignUp} />

        <stack.Screen name='Home' component={Home}/>
      </stack.Navigator>
    </NavigationContainer>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: 'lightyellow',
    shadowColor:'red',
    padding: 10,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 25,
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
    paddingHorizontal: 20,
  },
  marker : {
    width: 25,
    height: 25,
  },
});
