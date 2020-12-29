import React from 'react';
import RootStackScreen from './components/RootStackScreen';
import { 
  NavigationContainer, 
} from '@react-navigation/native';



export default class App extends React.Component {


  render() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
 
  );
}
}


