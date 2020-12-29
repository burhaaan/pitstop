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
import OTPInputView from '@twotalltotems/react-native-otp-input'



const OTPScreen = ({navigation}) => {
    const { colors } = useTheme();


    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#ed213a' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>OTP Verification</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Enter the 4-digit code sent at your number</Text>
            <View style={styles.action}>
            <OTPInputView pinCount={4} style={{width: '80%', height: 200}} autoFocusOnLoad 
             codeInputFieldStyle={styles.underlineStyleBase}
             codeInputHighlightStyle={styles.underlineStyleHighLighted}/>
               
                {/* <TextInput 
                    placeholder="Your Phone Number"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                /> */}
                {/* <PhoneInput
            defaultCode="DM"
            layout="first"
            withDarkTheme
            withShadow
            autoFocus
          /> */}
              
            </View>
  
            

           
            
         
            

           
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.navigate('SignInScreen')}
                >
                <LinearGradient
                    colors={['#ed213a', '#93291e']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Submit</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color: '#ed213a', marginTop:15}}>Resend Code</Text>
            </TouchableOpacity>

             
            </View>
        </Animatable.View>
      </View>
    );
};

export default OTPScreen;

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
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#ed213a",
      },
  });