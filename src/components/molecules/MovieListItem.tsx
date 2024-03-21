import { useNavigation, NavigationProp } from "@react-navigation/native"
import { Platform, Pressable, View, Image, Text, StyleSheet } from "react-native"
import { colors } from "../../config/theme/AppTheme"
import { Movie } from "../../interfaces/responseInterface"
import { RootStackParams } from "../../navigator/Navigation"
import { CustomIcon } from "./CustomIcon"
import { useAppDispatch } from "../../redux/hooks"
import { removeFavorite } from "../../redux/slices/favoritesSlice"
import toastMessages from "../../utils/toastMessages"


interface Props{
    movie: Movie
  }
  export const MovieListItem = ({movie}:Props) => {

    const dispatch = useAppDispatch()
    const platform = Platform.OS;
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const removeFavorites = () => {
      dispatch(removeFavorite({imdbID: movie.imdbID}))
      toastMessages({type: 'error', text1: 'Eliminado de Favoritos', text2: 'Hemos Eliminado esta peli de Favoritos!'})
      
    }
    return (
      <Pressable
      onPress={() => (navigation.navigate('Movie', {movieId: movie.imdbID, previousScreen:'Inicio'} ))}
       style={styles.container}>
        <View style={styles.movieCard}>
          <Image
            style={styles.poster}
            source={{uri: movie.Poster}} />
          
          <View style={{marginLeft: 10, width:'40%'}}>
  
            <Text style={{textAlign : 'center', color: colors.text, fontWeight: 'bold'}}>{movie.Title}</Text>
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <CustomIcon name={platform === 'ios' ? 'share-outline' : 'share-social-outline'} size={30} color={colors.text}/>
            <CustomIcon 
            name='close-circle-outline' 
            size={30} 
            color={colors.text}
            onpress={removeFavorites}
            />
          </View>
  
        </View>
      </Pressable>
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