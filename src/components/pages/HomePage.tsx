import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { Title } from '../atoms/Title'
import { globalStyles } from '../../config/theme/AppTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { SearchInput } from '../molecules/SearchInput';
import { SearchOrganism } from '../organisms/SearchOrganism';
import { getRecommendedMovies2023, getRecommendedMovies2024 } from '../../api/getRecommendedMovies';
import { Movie } from '../../interfaces/responseInterface';
import { RecommendedSection } from '../organisms/RecommendedSection';
import { MovieCard } from '../molecules/MovieCard';
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies';

export const HomePage = () => {
    const {movies2023, movies2024, loading} = useRecommendedMovies()

  return (
    <View
    style={
        globalStyles.mainContainer
    }>  

      {/* Busqueda  */}
      <SearchOrganism />

      <View style={{marginTop: 20}} />

      {/* Recomendaciones 1 */}
      <RecommendedSection
      title={'Mejores 2023:'}
      movie={movies2023!}
      />

      <View style={{marginTop: 20}} />

      {/* Recomendaciones 2 */}
      <RecommendedSection
      title={'Mejores 2024:'}
      movie={movies2024!}
      />


    </View>
  )
}


