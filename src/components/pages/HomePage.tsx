import React, { useEffect, useState } from 'react'
import {  View } from 'react-native'
import {  globalStyles } from '../../config/theme/AppTheme';
import { SearchOrganism } from '../organisms/SearchOrganism';
import { Movie } from '../../interfaces/responseInterface';
import { RecommendedSection } from '../organisms/RecommendedSection';
import { useRecommendedMovies } from '../../hooks/useRecommendedMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomLoadingSpinner } from '../organisms/CustomLoadingSpinner';


export const HomePage = () => {
 
    const {movies2023, movies2024, loading, data} = useRecommendedMovies()

    const getData = async (item: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(item);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
       console.log(e, 'Error al obtener data')
      }
    };
    
    useEffect(() => {

      getData('favorites')
      
     
    }, [])
    if(loading) return <CustomLoadingSpinner />
  return (
    <View
    style={
        globalStyles.mainContainer
    }>  

      {/* Busqueda  */}
      <SearchOrganism
     
      />

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
