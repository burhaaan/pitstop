import React from 'react';
import {Image, View} from 'react-native';
import MapView from 'react-native-maps';


export default class Driver extends React.Component {
    constructor(props) {
        super(props)
        const driver = this.props.driver? this.props.driver : {
            uid: "noDriversPassed",
            location: { longitude: 0, latitude: 0}
        }
        const coordinate = new MapView.AnimatedRegion({
            longitude: driver.location.longitude,
            latitude: driver.location.latitude,
            latitudeDelta: 0,
            longitudeDelta: 0
        })
        this.state = {
            driver: driver,
            coordinate: coordinate
        }
    }

    render() {
        return (
            <MapView.Marker.Animated
                coordinate = {this.state.coordinate}
                anchor={{x: 0.35, y: 0.32}}
                ref = {marker => this.marker=marker}
                style={{width:50, height:50}}>

            <Image 
            source={require('../assets/images/car.png')}
            style={{width:32, height:32}}/>
            </MapView.Marker.Animated>
        )
    }
 }