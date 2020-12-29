import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {DestinationButton} from './DestinationButton';
import {CurrentLocationButton} from './CurrentLocationButton';
import Driver from './Driver';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: this.region
    }
    this.getLocationAsync()
  }
  

  getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION)
    if(status !== 'granted')
      console.log('Permission to access location was denied')

    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,

    }

    this.setState({region: region})

    
  }
  centerMap() {
      const { latitude,
    longitude,
    latitudeDelta,
    longitudeDelta} = this.state.region;

    this.map.animateToRegion({latitude, longitude, latitudeDelta, longitudeDelta})
  }

  render() {
  return (
    
    <View style={styles.container}>
      <DestinationButton />
      <CurrentLocationButton cb={() => this.centerMap()}/>
      <Driver driver={{uid: null, location: { 
        longitude: -122.43,
        latitude: 37.7
      }}}/>
      <MapView 
       initialRegion = {this.state.region}
       showsUserLocation = {true}
       showsCompass = {true}
       rotateEnabled = {false}
       ref = {(map) => this.map = map}
       style = {{flex: 1}}>
        <Driver driver={{uid: 'null', location: { 
        longitude: 77.4977,
        latitude: 27.2046
      }}}/>

       </MapView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
