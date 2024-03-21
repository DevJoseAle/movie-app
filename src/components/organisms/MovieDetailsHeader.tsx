import { StyleSheet, useWindowDimensions, Image, Pressable, Platform, Alert, Share } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { MovieDetails } from "../../interfaces/responseInterface";
import { useNavigation } from "@react-navigation/native";
import { colors } from '../../config/theme/AppTheme';
import { CustomIcon } from '../molecules/CustomIcon';
import { useAppDispatch } from '../../redux/hooks';
import { addToFavorites } from '../../redux/slices/favoritesSlice';

import toastMessages from '../../utils/toastMessages';
import { useCheckFavorites } from '../../hooks/useCheckFavorites';
import { onShare } from '../../utils/onShared';



interface Props{
  fullMovie: MovieDetails,
}


export const MovieDetailHeader = ({fullMovie}: Props) => {
  const navigation = useNavigation();
  const {height: totalHeight} = useWindowDimensions();
  const platform = Platform.OS;
  const checked = useCheckFavorites(fullMovie.imdbID);
  const dispatch = useAppDispatch()
  
  const handleAddToFavorite = () => {
    dispatch(addToFavorites({
        Title:  fullMovie!.Title,
        Year:   fullMovie!.Year,
        imdbID: fullMovie!.imdbID,
        Poster: fullMovie!.Poster
      }))

      toastMessages({type: 'success', text1: 'Agregado a Favoritos', text2: 'Hemos Agregado esta peli a Favoritos!'})

    }

   
  return (
    <>
        <View style={{...styles.container, height: totalHeight * 0.65}}>
            < View style={styles.borderImg}>
            
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{fullMovie.Title}</Text>
                    <Text style={styles.subTitle}>{fullMovie.Genre}</Text>
                    <Text style={styles.rating}>{fullMovie.imdbRating}</Text>
                </View>
            
                <Image style={styles.posterImage} source={{uri: fullMovie.Poster}} />
            </View>
        
        </View>


            <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
                <CustomIcon 
                    name='chevron-back-outline' 
                    size={20} 
                    color={colors.text} 
                    isPressable={false}
                    
                    />
            </Pressable>

        <View style={styles.heartButton}>
            <Pressable onPress={() => navigation.goBack()}  >
                <CustomIcon 
                    name='heart-outline' 
                    size={20} 
                    color={checked ? 'red' : colors.text} 
                    isPressable={true}
                    onpress={handleAddToFavorite}
                    
                    />
            </Pressable>
        </View>
        <View style={styles.sharedButton}>
            <Pressable onPress={() => onShare(fullMovie)}  >
                <CustomIcon 
                    name={platform === 'ios' ? 'share-outline' : 'share-social-outline' }
                    size={20} 
                    color={colors.text} 
                    isPressable={false}
                    
                    />
            </Pressable>
        </View>
    </>
  )
}








const styles = StyleSheet.create({
    container:{
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
  
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      backgroundColor: colors.secondary
    },
  
    borderImg: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    titleContainer: {
      position:'absolute',
      backgroundColor: '#000000CE',
      bottom: 0,
      right:0,
      left:0,
      zIndex: 999,
      width: '100%',
      height:100,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,

    },
    subTitle: {
        color: colors.text,
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
        color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
    },
    rating:{
        color: '#FFB700',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      width: 60,
      height:50,
      top: 35,
      left: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0000004D',
      borderRadius: 30,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
    },
    heartButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      width: 65,
      height:50,
      top: 35,
      right: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0000004D',
      borderRadius: 30,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
    },
    sharedButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      width: 60,
      height:50,
      top: 35,
      right: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0000004D',
      borderRadius: 30,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7
    }
  });