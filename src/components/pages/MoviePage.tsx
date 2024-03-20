import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { MovieDetails, Movie } from '../../interfaces/responseInterface';
import { RootStackParams } from '../../navigator/Navigation'
import { StackScreenProps } from '@react-navigation/stack'
import { getMovie } from '../../api/getMovie';
import { useNavigation } from '@react-navigation/native';
import { useMovieDetails } from '../../hooks/useMovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Movie'>{};
export const MoviePage = ({route}:Props) => {

    const {movieId} = route.params;
    const navigation = useNavigation()
    const {movie, loading} = useMovieDetails(movieId)

    useLayoutEffect(() => { 
      navigation.setOptions({
        title: movie?.Title
      })}, [movie, navigation])



  return (
    <View>
      <Text>MoviePage</Text>
    </View>
  )
}
