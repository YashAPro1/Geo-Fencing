import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import RandomColor from 'randomcolor';

const HomePage = ({ navigation }) => {
  const [language, setLanguage] = useState('English');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleLanguageChange = () => {
    if (language === 'English') {
      setLanguage('Kannada');
    } else {
      setLanguage('English');
    }
  };

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    navigation.navigate(buttonName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Geo Fencing</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Maps' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Maps')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Maps' && styles.selectedButtonText,
            ]}
          >
            {language === 'English' ? 'Maps' : 'ನಕ್ಷೆಗಳು'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Dashboard' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Dashboard')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Dashboard' && styles.selectedButtonText,
            ]}
          >
            {language === 'English' ? 'Dashboard' : 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Guide' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Guide')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Guide' && styles.selectedButtonText,
            ]}
          >
            {language === 'English' ? 'Guide' : 'ಮಾರ್ಗದರ್ಶಕ'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.languageButtonContainer}>
        <Button
          title={language === 'English' ? 'Kannada' : 'English'}
          onPress={handleLanguageChange}
          color="#007bff"
        />
      </View>
      <View style={styles.logoutButtonContainer}>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
          color="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '30%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: '#c4c4c4',
  },

  selectedButtonText: {
    fontWeight: 'bold',
  },
  languageButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default HomePage;
