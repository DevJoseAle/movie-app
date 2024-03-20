import { useState, useEffect } from "react"
import { getRecommendedMovies2023, getRecommendedMovies2024 } from "../api/getRecommendedMovies"
import { Movie } from "../interfaces/responseInterface"

export const useRecommendedMovies  = () =>{

    //States
  const [loading, setLoading] = useState<boolean>(true)
  const [movies2023, setMovies2023] = useState<Movie[] | undefined>([])
  const [movies2024, setMovies2024] = useState<Movie[] | undefined>([])

  const firstApiCall = async () =>{
    try {
      setLoading(true)
      const [moviesData2023 , moviesData2024 ] = await Promise.all([
         getRecommendedMovies2023(),
         getRecommendedMovies2024()

      ])
      if(!moviesData2023 && !moviesData2024){
        throw new Error('No se encontraron datos')
      }
       setMovies2023(moviesData2023)
       setMovies2024(moviesData2024)

      setLoading(false)
      
    } catch (error) {
      console.log('catching error', error)
    }
}

  useEffect(() => {
    firstApiCall()
  }, [])

  return{
    loading,
    movies2023,
    movies2024,
  }
}