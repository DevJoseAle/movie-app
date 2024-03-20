import React from 'react'
import { ScrollView, Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { colors, globalStyles } from '../../config/theme/AppTheme'
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies'
import { Movie } from '../../interfaces/responseInterface';
import { CustomIcon } from '../molecules/CustomIcon';

export const FavoritePage = () => {
  const {movies2023, movies2024, loading} = useRecommendedMovies()

  return (
    <View
       style={ globalStyles.mainContainer}
    >
    <FlatList
      data={movies2024}
      keyExtractor={(item) => item.imdbID}
      renderItem={({item}) => <FavoriteItem movie={item}/>}
    />
    </View>
  )
}

interface Props{
  movie: Movie
}
export const FavoriteItem = ({movie}:Props) => {


  return (
    <View style={styles.container}>
      <View style={styles.movieCard}>
        <Image
          style={styles.poster}
          source={{uri: movie.Poster}} />
        
        <View style={{marginLeft: 10, width:'40%'}}>

          <Text style={{textAlign : 'center', color: colors.text, fontWeight: 'bold'}}>{movie.Title}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <CustomIcon name='cart-outline' size={30} color={colors.text}/>
          <CustomIcon name='close-circle-outline' size={30} color={colors.text}/>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
    padding: 9,
    height:90,
    borderRadius: 10,
    backgroundColor:"#909090BB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    
  },
  movieCard:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  poster:{
    width: 60,
    height: 80,
    borderRadius: 10
  }
})