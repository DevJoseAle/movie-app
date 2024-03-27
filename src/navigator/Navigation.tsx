import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../components/pages/HomePage';
import { CustomHeader } from '../components/organisms/CustomHeader';
import { BottomTabs } from './BottomTabs';
import { FavoritePage } from '../components/pages/FavoritePage';
import { MoviePage } from '../components/pages/MoviePage';
import { colors } from '../config/theme/AppTheme';
import { SearchResultsPage } from '../components/pages/SearchResultsPage';


export type RootStackParams = {
  Inicio: undefined;
  Search: undefined,
  Movie: { movieId: string, previousScreen: string};
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
        options={{
          header: () => <CustomHeader title="Búsqueda" icon/>
        }}
        name="Search" 
        component={SearchResultsPage} 
      />
      <Stack.Screen 
        options={{
        headerShown: false
        }}
        name="Movie" 
        component={MoviePage } 
      />
     
    </Stack.Navigator>
  );
}




