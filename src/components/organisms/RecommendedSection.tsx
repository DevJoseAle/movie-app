import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../../interfaces/responseInterface'
import { Title } from '../atoms/Title';
import { MovieCard } from '../molecules/MovieCard';

interface Props {
  movie: Movie[],
  title: string,

}

export const RecommendedSection = ({movie,title}: Props) => {

  const filteredMovies = () => movie.filter( movie => movie.Poster !== 'N/A')

  return (
    <View style={ styles.container}>
      <Title title={title} marginLeft={10} marginBottom={10} size={25}/>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={filteredMovies()}
      horizontal
      renderItem={({item})=> <MovieCard movie={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,

  }
})