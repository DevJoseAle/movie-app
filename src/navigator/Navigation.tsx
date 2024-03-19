import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../components/pages/HomePage';
import { CustomHeader } from '../components/organisms/CustomHeader';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
     screenOptions={{
     header: () => <CustomHeader/>
    }} 
    >
      <Stack.Screen name="Home" component={HomePage} />
     
    </Stack.Navigator>
  );
}




