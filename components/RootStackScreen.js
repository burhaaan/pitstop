import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import PhoneNumberScreen from './PhoneNumberScreen'
import MapsScreen from './MapsScreen'
import OTPScreen from './OTPScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>

        <RootStack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen}/>
        <RootStack.Screen name="OTPScreen" component={OTPScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="MapsScreen" component={MapsScreen}/>


    </RootStack.Navigator>
);

export default RootStackScreen;