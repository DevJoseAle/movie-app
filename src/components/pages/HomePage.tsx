import React, { useEffect, useState } from 'react'
import { Button, FlatList, Pressable, Text, View } from 'react-native'
import { Title } from '../atoms/Title'
import { colors, globalStyles } from '../../config/theme/AppTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { SearchInput } from '../molecules/SearchInput';
import { SearchOrganism } from '../organisms/SearchOrganism';
import { Movie } from '../../interfaces/responseInterface';
import { RecommendedSection } from '../organisms/RecommendedSection';
import { MovieCard } from '../molecules/MovieCard';
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies';
import {  getMovieByTitle } from '../../api/getMoviesByTitle';
import { useDebounce } from '../../hooks/useDebounce';
import { MovieListItem } from '../molecules/MovieListItem';
import { CustomIcon } from '../molecules/CustomIcon';
import { SearchResults } from '../organisms/SearchResults';


export const HomePage = () => {
 


    const [searchTerm, setSearchTerm] = useState('')
    const {movies2023, movies2024, loading} = useRecommendedMovies()

    const [isLoading, setIsLoading] = useState(false)
    const [searchResults, setSearchResults] = useState<Movie[] | string >('')

    
    const searchMovies = async (searchTerm: string) =>{
        try {
          setIsLoading(true)
          const movies = await getMovieByTitle(searchTerm)
          if(!movies){
              throw new Error('No se encontraron datos')
          }
          setSearchResults(movies)
          setIsLoading(false)
        }catch(error){
          console.log(error)
        }
            
    }

  return (
    <View
    style={
        globalStyles.mainContainer
    }>  

      {/* Busqueda  */}
      <SearchOrganism
      setSearchTerm={setSearchTerm} 
      searchTerm={searchTerm}/>

      <View style={{marginTop: 20}} />
   
      <>
        <RecommendedSection
        title={'Mejores 2023:'}
        movie={movies2023!}
        />

        <View style={{marginTop: 20}} />


        <RecommendedSection
        title={'Mejores 2024:'}
        movie={movies2024!}
        />
      </>

    </View>
  )
}
// <SearchResults searchResults={searchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//<Text>No hay resultados</Text>

/*

 <>
    <RecommendedSection
    title={'Mejores 2023:'}
    movie={movies2023!}
    />

    <View style={{marginTop: 20}} />


    <RecommendedSection
    title={'Mejores 2024:'}
    movie={movies2024!}
    />
  </>



        USEEFFECT
        useEffect(() => {
      
      setIsLoading(true);
      
      const data = async () => {
        
        try {
          const resp = await getMovieByTitle(searchTerm)
          setSearchResults(resp)
          setIsLoading(false)
          
        } catch (error) {
          
        }

      }
      if(searchTerm === undefined) return
      data()

    }, [searchTerm])


*/