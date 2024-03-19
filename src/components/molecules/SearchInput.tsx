import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { CustomIcon } from './CustomIcon'
import { colors } from '../../config/theme/AppTheme'

export const SearchInput = () => {

  return (
    <View
    style={styles.searchContainer}
    >
        <CustomIcon name='search-outline' size={30} color={colors.text}  />

        <TextInput
        style={styles.input}
        onFocus={() => console.log('onFocus')}
        placeholder="Ej: Harry Potter"
        
        inputMode='text'
        />
   </View> 
  )
}



const styles = StyleSheet.create({
    searchContainer:{
        paddingLeft:10,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:"#909090",
        borderRadius:20,
        marginHorizontal: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#727272",
    },
    input: {
      height: 40,
      width: '90%',
      borderRadius:20,
      paddingLeft:20,
      paddingRight:10,
      paddingTop:0,
      fontSize:20

    }
})