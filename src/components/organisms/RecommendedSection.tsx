import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../../interfaces/responseInterface'
import { Title } from '../atoms/Title';
import { MovieCard } from '../molecules/MovieCard';
import { globalStyles } from '../../config/theme/AppTheme';

interface Props {
  movie: Movie[],
  title: string,

}

export const RecommendedSection = ({movie,title}: Props) => {

  return (
    <View style={ styles.container}>
      <Title title={title} marginLeft={10} marginBottom={10} size={25}/>
      <FlatList
      data={movie}
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