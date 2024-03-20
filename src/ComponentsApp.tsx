import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';

import { BottomTabs } from './navigator/BottomTabs';


const ComponentsApp = () => {
  return( 
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>
  );
};
export default ComponentsApp;
