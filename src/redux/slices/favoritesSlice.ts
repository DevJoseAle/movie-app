import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setStorage } from '../../utils/setStorage';
import { removeStorage } from '../../utils/removeItemStorage';

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
      setStorage(state, 'favorites')

      
    },
    removeFavorite: (state, action: PayloadAction<RemoveFavoriteState>) =>{

      const {imdbID}  = action.payload;
      const dataFiltered = state.filter(movie => movie.imdbID !== imdbID);
      removeStorage();
      setStorage(dataFiltered, 'favorites')
      return dataFiltered
    }
  },
})

export const { addToFavorites, removeFavorite} = favoriteSlice.actions

