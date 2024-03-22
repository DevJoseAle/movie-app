import React from 'react'
import { ScrollView, Text, View, FlatList, StyleSheet, Image, Platform, Pressable } from 'react-native';
import { colors, globalStyles } from '../../config/theme/AppTheme'
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies'
import { Movie } from '../../interfaces/responseInterface';
import { CustomIcon } from '../molecules/CustomIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/Navigation';
import { MovieListItem } from '../molecules/MovieListItem';
import { useAppSelector } from '../../redux/hooks';
import { Title } from '../atoms/Title';
import { NoFavorites } from '../atoms/NoFavorites';

export const FavoritePage = () => {
  
  const favorites = useAppSelector((state) => state.favoritesSlice)
  return (
    <View
       style={ globalStyles.mainContainer}
    >
      {
        favorites.length > 0
        ? <FlatList
            data={favorites}
            keyExtractor={(item) => item.imdbID}
            renderItem={({item}) => <MovieListItem movie={item} />}
          />
        : <NoFavorites/>
      }
    </View>
  )
}

