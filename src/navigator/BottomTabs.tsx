import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from './Navigation';
import { HomePage } from '../components/pages/HomePage';
import { colors } from '../config/theme/AppTheme';
import { CustomIcon } from '../components/molecules/CustomIcon';
import { FavoritePage } from '../components/pages/FavoritePage';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
     return (
    <Tab.Navigator 
    initialRouteName="Inicio"
    screenOptions={{
      tabBarLabelStyle: {
        fontSize: 12,
        color:  colors.text
      },
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.secondary,
        borderTopWidth: 0,
        borderTopColor: 'black',
        height: 70
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen 
        name="Home"  
        options={{
          title:'Inicio',
          tabBarIcon: ({color})=> (<CustomIcon name='home-outline' size={25} color={color} isPressable={false}/>)
        }} 
        component={Navigation} 
      />
      <Tab.Screen 
      name="Favorites" 
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.secondary
          
        },
        headerTitleStyle: {
          color: colors.text
        },
        
        title:'Mis Favoritos',
        
        tabBarIcon: ({color})=> (
        <CustomIcon 
          name='heart-outline' 
          size={28} 
          color={color} 
          isPressable={false}
        />)
      }} 
      component={FavoritePage} 
      />
    </Tab.Navigator>
  );
}