import React from 'react'
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'
import {Ionicons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width
export const DestinationButton = function(props) {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <View style={styles.letfCol}>
                <Text style={{fontSize:8}}>{'\u25A0'}</Text>
            </View>
            <View style={styles.centerCol}>
                <Text style={{fontSize:15, color: '#545454'}}>Enter pickup location</Text>
            </View>
            <View style={styles.rightCol}>
                <Ionicons name="md-car" color="#000000" size={25} style={{alignSelf: 'center'}} />
            </View>

        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top: 110,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#d8d8d8',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    letfCol: {
        flex: 1,
        alignItems: 'center',
    },
    centerCol: {
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed'
    }
})