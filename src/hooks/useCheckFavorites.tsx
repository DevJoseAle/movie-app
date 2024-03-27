import { useAppSelector } from "../redux/hooks"

export const useCheckFavorites = (imdbID: string) => {
    const favorites = useAppSelector((state) => state.favoritesSlice)
    return favorites.some(movie => movie.imdbID === imdbID)
}