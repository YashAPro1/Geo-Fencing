import React from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, Alert, View } from "react-native";

const Home = ({navigation}) => {

    const Map = () => {
        navigation.navigate('Map');
    };

    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text>Home Content here</Text>
            <TouchableOpacity style={styles.button} onPress={Map}>
                <Text style={styles.buttonText}>Getting Started</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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

export default Home;