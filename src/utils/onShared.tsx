import { Share, Alert } from "react-native";
import toastMessages from "./toastMessages";
import { MovieDetails } from "../interfaces/responseInterface";

export const onShare = async (fullMovie: MovieDetails) => {
    try {
      const result = await Share.share({
        title: '¡Hola!',
        message:
        `
        ${fullMovie.Poster}
        ¡Hola!
        Te recomiendo que veas la siguiente película: ${fullMovie.Title},
        
        Director: ${fullMovie}
        Reparto: ${fullMovie.Actors}
        Resumen: ${fullMovie.Plot}
        Rating: ${fullMovie.imdbRating}

        ` ,
        
      },
      {
        dialogTitle: 'Compartir',
        subject: `Te recomiendo la siguiente Película: ${fullMovie.Title}`,
      }
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
         toastMessages({type: 'success', text1: 'Compartido', text2: 'Hemos compartido esta peli!'})
        } 
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        toastMessages({type: 'error', text1: 'Lo sentimos🥲', text2: 'No hemos podido compartir esta peli!'})
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(error.message);
    }
  };