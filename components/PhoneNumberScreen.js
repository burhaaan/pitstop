import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";




const PhoneNumberScreen = ({navigation}) => {
    const { colors } = useTheme();


    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#ed213a' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to PitStop!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Enter your phone number</Text>
            <View style={styles.action}>
               
                {/* <TextInput 
                    placeholder="Your Phone Number"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                /> */}
                <PhoneInput
            defaultCode="DM"
            layout="first"
            withDarkTheme
            withShadow
            autoFocus
          />
              
            </View>
  

                <Text style={{color: '#c0c0c0', marginTop:15}}>By continuing, i confirm that i have read and agree to the Terms and Conditions and Privacy Policy</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('OTPScreen')}
                >
                <LinearGradient
                    colors={['#ed213a', '#93291e']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>

             
            </View>
        </Animatable.View>
      </View>
    );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ed213a'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ed213a',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#ed213a',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });