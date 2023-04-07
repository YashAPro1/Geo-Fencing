import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import RandomColor from 'randomcolor';
import * as FileSystem from "expo-file-system";
import tokml from "geojson-to-kml";
// import * as RNFS from 'react-native-fs';


function Map() {

    const [region, setRegion] = useState({
        latitude:19.045984,
        longitude: 72.871005,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      const [points, setPoints] = useState([]);
    
      const [polygons, setPolygons] = useState([]);

      const [geoCoord, setGeoCoord] = useState([]);
    
      const addPoint = (event) => {
        if(polygons.length>1){

        }
        const coordinate = event.nativeEvent.coordinate;
        setPoints([...points, coordinate]);
        console.log(`Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`);
      };
    
      const clearPoints = () => {
        setPoints([]);
      };
    
      const savePolygon = () => {
        if (points.length > 2) {
          const polygonColor = RandomColor({ luminosity: 'light' , format : 'rgba', alpha : '0.5' });
          setPolygons([...polygons, { coordinates: points, fillColor: polygonColor }]);
          geoJsonData();
          setPoints([]);
        }
        
      };
    
      const renderPolygons = () => {
        return polygons.map((polygon, index) => (
          <Polygon key={index} coordinates={polygon.coordinates} fillColor={polygon.fillColor} />
        ));
      };

      async function geoJsonData(){

        polygons.forEach(polygon=>{
          geoCoord.push({ "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": polygon.coordinates,
            },
            "properties": {
              "prop0": "value0",
              "prop1": {"this": "that"}
              }
            }
          )}
        )

        const geodata = 
        { "type": "FeatureCollection",
          "features": geoCoord
        }
        // var obj = Object.fromEntries(data);
        var jsonString = JSON.stringify(geodata);

        // var RNFS = require('react-native-fs');
        // console.log(RNFS.writ);
        var pathgeo = `${FileSystem.documentDirectory}data.geojson`;
        var pathkml = `${FileSystem.documentDirectory}data.kml`;
        var mainuri = `${FileSystem.documentDirectory}data2.kml`;
        console.log(pathkml);
        // path.createWriteable();
        try{
          const kmldata = tokml(geodata);
          await FileSystem.writeAsStringAsync(pathkml, kmldata);
          const kd = await FileSystem.readAsStringAsync(pathkml);
          const downloadedFile = await FileSystem.downloadAsync(pathkml, mainuri);
          console.log(downloadedFile);
        }
        catch(error){
          console.log(error);
          // console.log("Error occured in saving kml?");
        }
        
        // RNFS.write(path, data)
        // .then((success) => {
        // console.log('FILE WRITTEN!');
        // })
        // .catch((err) => {
        // console.log(err.message);
        // });
        
        
        // FileSystem.readAsStringAsync()
        // console.log(kml);
        // var geojson2kml = require('geojson2kml');
        // geojson2kml(pathgeo, "./data.kml", function(err){
        //   if(err){console.log(err);}
        // });
      };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={addPoint}
        mapType="satellite"
      >
        {renderPolygons()}
        {points.map((point, index) => (
          <Marker key={index} coordinate={point} image = {require('./marker.png')}/>
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={clearPoints}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Clear Points</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={savePolygon}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Save Polygon</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setPolygons([...polygons, { coordinates: points, fillColor: RandomColor({ luminosity: 'light' , format: 'rgba', alpha : '0.5'}) }]);
            setPoints([]);
          }}>
            {/* <View style={styles.button}>
              <Text style={styles.buttonText}>Make New Polygon</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
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
  

export default Map;