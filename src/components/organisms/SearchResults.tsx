import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/AppTheme'
import { Title } from '../atoms/Title'
import { MovieListItem } from '../molecules/MovieListItem'
import { Movie } from '../../interfaces/responseInterface'

interface Props{
    searchTerm: string
    searchResults: Movie[] | string
    setSearchTerm: (value: string) => void
}
export const SearchResults = ({searchResults, searchTerm, setSearchTerm}:Props) => {

  return (
    <View> 
            <Title title={`Resultados \npor busqueda ${searchTerm} : `} marginLeft={8} size={20} />
            <Pressable
             style={{
              width: 200, 
              height:30, 
              marginVertical: 10,
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: 
              colors.primary, 
              borderRadius: 10, 
              alignSelf: 'center', 
              marginRight: 10}}
             onPress={() => setSearchTerm('')}>
              <Text style={globalStyles.subTitle}>Borrar Búsqueda</Text>
              </Pressable>
            <FlatList
            data={searchResults && Array.isArray(searchResults) ? searchResults : []} 
            keyExtractor={(item) => item.imdbID}
            renderItem={({item}) => <MovieListItem movie={item}/>}
            />
          </View>
  )
}
