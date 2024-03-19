import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { Title } from '../atoms/Title'
import { globalStyles } from '../../config/theme/AppTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { SearchInput } from '../molecules/SearchInput';
import { SearchOrganism } from '../organisms/SearchOrganism';
import { getRecommendedMovies2023 } from '../../api/getRecommendedMovies';
import { Movie } from '../../interfaces/responseInterface';
import { RecommendedSection } from '../organisms/RecommendedSection';
import { MovieCard } from '../molecules/MovieCard';

export const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[] | undefined>([])

  const firstApiCall = async () =>{
    try {
      setLoading(true)
      const movies = await getRecommendedMovies2023()
      if(!movies)return console.log('no hay movies')
      setRecommendedMovies(movies)
      setLoading(false)
      
    } catch (error) {
      console.log('catching error', error)
    }
}

  useEffect(() => {
    firstApiCall()
  }, [])

  console.log(' desdeee ',recommendedMovies![0])
  
  return (
    <View
    style={
        globalStyles.mainContainer
    }>  

      {/* Busqueda  */}
      <SearchOrganism />

      <View style={{marginTop: 20}} />
      {/* Recomendaciones */}
      <RecommendedSection
      title={'Mejores 2023:'}
      movie={recommendedMovies!}
      />
         <View style={{marginTop: 20}} />
      <RecommendedSection
      title={'Mejores 2024:'}
      movie={recommendedMovies!}
      />


    </View>
  )
}


