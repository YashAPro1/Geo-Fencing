import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Button} from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "react-navigation-stack";

// {pages}
import Home from './pages/Home';
import Start from './pages/Start';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Map from './pages/Map';
import Dashboard from './pages/Dashboard';


const Tab = createNativeStackNavigator();



export default function App() {
  return ( 
      <NavigationContainer>
      <Tab.Navigator initialRouteName='Start' >
        <Tab.Screen name="Start" component={Start} />
        <Tab.Screen
          name="Goefencing"
          component={Home}/>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="map" component={Map} />
        <Tab.Screen name="dashboard" component={Dashboard} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import MapView from 'react-native-maps';
// import { point } from '@turf/helpers';
// import destination from '@turf/destination';
// import * as Location from 'expo-location';
// // import Geolocation from '@react-native-community/geolocation';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       elements: [],
//       south: null,
//       west: null,
//       north: null,
//       east: null,
//       latitude: 18.914949,
//       longitude: 72.656420,
//     };
//   }

//   updateState(location) {
//     this.setState({
//       ...this.state,
//       latitude: this.latitude,
//       // latitude: location.coords.latitude,
//       longitude: this.longitude,
//       // longitude: location.coords.longitude,
//     });
//   }

//   async componentDidMount() {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         return;
//       }
//       let location = await Location.getCurrentPositionAsync({});
//       this.updateState(location);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   onRegionChangeComplete = (region) => {
//     const center = point([region.longitude, region.latitude]);
//     const verticalMeter = (111 * region.latitudeDelta) / 2;
//     const horizontalMeter = (111 * region.longitudeDelta) / 2;
//     const options = { units: 'kilometers' };
//     const south = destination(center, verticalMeter, 180, options);
//     const west = destination(center, horizontalMeter, -90, options);
//     const north = destination(center, verticalMeter, 0, options);
//     const east = destination(center, horizontalMeter, 90, options);
//     this.setState({
//       south: south.geometry.coordinates[1],
//       west: west.geometry.coordinates[0],
//       north: north.geometry.coordinates[1],
//       east: east.geometry.coordinates[0],
//     });
//   };

//   fetchToilet = async () => {
//     const south = this.state.south;
//     const west = this.state.west;
//     const north = this.state.north;
//     const east = this.state.east;
//     const body = `
//             [out:json];
//             (
//                 node
//                 [amenity=kindergarten]
//                 (${south},${west},${north},${east});

//             );
//             out;
//             `;

//     const options = {
//       method: 'POST',
//       body: body,
//     };

//     try {
//       const response = await fetch(
//         'https://overpass-api.de/api/interpreter',
//         options
//       );
//       const json = await response.json();
//       this.setState({ elements: json.elements });
//     } catch (e) {
//       console.log(e);
//     }
//   };
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           onRegionChangeComplete={this.onRegionChangeComplete}
//           style={styles.mapView}
//           showsUserLocation
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.02, 
//             longitudeDelta: 0.02,
//           }}>
//           {this.state.elements.map((element) => {
//             let title = 'Hello';
//             if (element.tags['name'] !== undefined) {
//               title = element.tags['name'];
//             }
//             return (
//               <MapView.Marker
//                 coordinate={{
//                   latitude: this.lat,
//                   longitude: this.lon,
                  
//                 }}
//                 title={title}
//                 key={'id_' + element.id}
//               />
              
//             );
//           })}
          
//         </MapView>
        

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => this.fetchToilet()}
//             style={styles.button}>
//             <Text style={styles.buttonItem}></Text>
//           </TouchableOpacity>
          
//         </View>
//       </View>
//     );
//   }
  

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },

//   mapView: {
//     ...StyleSheet.absoluteFillObject,
//   },

//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 50,
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//   },

//   button: {
//     width: 150,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255,235,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },

//   buttonItem: {
//     textAlign: 'center',
//   },
// });



// <View style={styles.container}>
//       <MapView style={styles.map} />
//       <Button
//         onPress={ async()=> {
//           try {
//             const granted = await PermissionsAndroid.request(
//               PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//               {
//                 title: 'Geolocation Permission',
//                 message: 'Can we access your location?',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//               },
//             );
//             console.log('granted', granted);
//             if (granted === 'granted') {
//               console.log('You can use Geolocation');
//               return true;
//             } else {
//               console.log('You cannot use Geolocation');
//               return false;
//             }
//           } catch (err) {
//             return false;
//           }
//         }}
//         title="Learn More"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//       </View>