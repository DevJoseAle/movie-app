import React, { useState } from 'react'
import {  View } from 'react-native'
import { globalStyles } from '../../config/theme/AppTheme'
import { SearchInput } from '../molecules/SearchInput';
import { MovieListItem } from '../molecules/MovieListItem';
import { Title } from '../atoms/Title';
import { Movie } from '../../interfaces/responseInterface';
import { PaginationBtn } from '../molecules/PaginationBtn';

export const SearchResultsPage = () => {
  const [dataMovies, setDataMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(false) 
  const [actualPage, setActualPage] = useState<number>(1);
  const [moviePerPage, setMoviePerPage] = useState<number>(5);

  let iLastPost = actualPage * moviePerPage;
  let iFirstPost = iLastPost - moviePerPage;
  let currentData = dataMovies.slice(iFirstPost, iLastPost);


  return (
    <View style={ globalStyles.mainContainer}>
      <View style={{marginBottom: 20}}/>
      <SearchInput setDataMovies={setDataMovies} dataMovies={dataMovies} />

      {currentData.length > 0
        ? <>
            <View>
            { currentData.map((movie) => <MovieListItem movie={movie} key={movie.imdbID}  isFavorite={false}/>)}
            </View>
            <PaginationBtn moviePerPage={moviePerPage} currentData={currentData} setActualPage={setActualPage} actualPage={actualPage}/>
          </>
          
        : <View style={{marginTop: 20}}>
            <Title title={'No se encontraron resultados'} marginLeft={10} size={20}/>
          </View>
      }
    </View>
  )
}


