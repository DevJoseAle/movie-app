import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AddFavoriteState {
  Title:  string;
  Year:   string;
  imdbID: string;
  Poster: string;
}
interface RemoveFavoriteState {
  imdbID:  string;
}

const initialState: AddFavoriteState[] = []

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AddFavoriteState>) =>{

      const {imdbID}  = action.payload
      if(state.some(movie => movie.imdbID === imdbID)) return;
      state.push(action.payload)

      
    },
    removeFavorite: (state, action: PayloadAction<RemoveFavoriteState>) =>{

      const {imdbID}  = action.payload
      return state.filter(movie => movie.imdbID !== imdbID)
    }
  },
})

export const { addToFavorites, removeFavorite} = favoriteSlice.actions

