import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../components/pages/HomePage';
import { CustomHeader } from '../components/organisms/CustomHeader';
import { BottomTabs } from './BottomTabs';
import { FavoritePage } from '../components/pages/FavoritePage';
import { MoviePage } from '../components/pages/MoviePage';
import { colors } from '../config/theme/AppTheme';


export type RootStackParams = {
  Inicio: undefined;
  Favoritos: undefined,
  Movie: { movieId: string };
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          header: () => <CustomHeader/>
        }}
        name="Inicio" 
        component={HomePage} 
        />
      <Stack.Screen 
        
        name="Favoritos" 
        component={FavoritePage} 
      />
      <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: colors.secondary
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Movie" 
        component={MoviePage } 
      />
     
    </Stack.Navigator>
  );
}




