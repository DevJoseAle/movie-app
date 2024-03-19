import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../../interfaces/responseInterface'


interface Props{
    movie: Movie
}

export const MovieCard = ({movie}:Props) => {

  return (
    <Pressable
     onPress={() => console.log('onPress')}
     style={styles.cardContainer}>
   
            <Image source={{uri: movie.Poster}} style={styles.image} />
        
    </Pressable>
  )

}

const styles = StyleSheet.create({
    cardContainer: {
      width: 130,
      height: 170,
      marginHorizontal: 7,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image:{
        flex:1,
        borderRadius:10
    }
  })
