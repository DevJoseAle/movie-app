import React, { useLayoutEffect} from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../../navigator/Navigation'
import { StackScreenProps } from '@react-navigation/stack'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { globalStyles } from '../../config/theme/AppTheme';
import { MovieDetailHeader } from '../organisms/MovieDetailsHeader';
import { MovieDetails } from '../organisms/MovieDetails';
import { CustomLoadingSpinner } from '../organisms/CustomLoadingSpinner';

interface Props extends StackScreenProps<RootStackParams, 'Movie'>{};
export const MoviePage = ({route}:Props) => {
  
  
  const {movieId} = route.params;
  
  const navigation = useNavigation()
  const {movie, loading} = useMovieDetails(movieId)
  const params = useRoute()


    useLayoutEffect(() => { 
      navigation.setOptions({
        title: movie?.Title
      })}, [movie, navigation])


   
    if(!movie)return;
    if(loading) return <CustomLoadingSpinner />


  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={[globalStyles.mainContainer, {backgroundColor:'#000000CE'}]}>
      <MovieDetailHeader fullMovie={movie} />
      <MovieDetails 
        plot={movie.Plot} 
        released={movie.Released} 
        runtime={movie.Runtime} 
        actors={movie.Actors} 
        director={movie.Director} />
    </ScrollView>
  )
}
