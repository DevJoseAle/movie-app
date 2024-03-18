import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../components/pages/HomePage';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={HomePage} />
     
    </Stack.Navigator>
  );
}