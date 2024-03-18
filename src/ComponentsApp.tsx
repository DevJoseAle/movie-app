import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import { Navigation } from './navigator/Navigation';

const ComponentsApp = () => {
  return( 
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
};
export default ComponentsApp;
