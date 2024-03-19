import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Title } from '../atoms/Title'
import { globalStyles } from '../../config/theme/AppTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { SearchInput } from '../molecules/SearchInput';
import { SearchOrganism } from '../organisms/SearchOrganism';

export const HomePage = () => {

    const appTitle = `
    ¡Busca tu 
    Película Favorita!
    `;
  return (
    <View
    style={
        globalStyles.mainContainer
    }>  
    <SearchOrganism />
 

    </View>
  )
}


const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:"#909090",
        borderRadius:20,
        marginHorizontal: 12,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: "#727272",
    },
    input: {
      height: 40,
      width: '90%',
      borderRadius:20,
      borderColor: 'transparent',
      paddingLeft:20,
      paddingRight:10,
      paddingTop:10,
      fontSize:20

    }
})