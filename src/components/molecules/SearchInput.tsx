import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { CustomIcon } from './CustomIcon'
import { colors } from '../../config/theme/AppTheme'
  interface Props{
    setSearchTerm: (value:string)=>void,
    searchTerm: string
  }
export const SearchInput = ({setSearchTerm, searchTerm}:Props) => {

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleChangeText = (text: string) => {
    setLocalSearchTerm(text.trim()); 
  };

  const submit = () => {
    
    setSearchTerm(localSearchTerm); 
  };



  return (
    <>
      <View
        style={styles.searchContainer}
      >
          <CustomIcon 
          name={'search-outline'} 
          size={30} color={colors.text}
          isPressable
          onpress={submit}
          />

          <TextInput
          style={styles.input}
          
          placeholder="Ej: Harry Potter"
          onChangeText={handleChangeText}
          onSubmitEditing={submit}
          inputMode='text'
          value={localSearchTerm}
          
          />
       </View> 
       <View style={{marginTop: 10}}>
        <Pressable 
          onPress={()=> {}}
          style={({pressed}) => [{opacity: pressed ? 0.7 : 1},styles.toSearchButton]}>
          <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 20}}>¡Presiona para buscar!</Text>
        </Pressable>
        </View>
    </>
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

    },
    toSearchButton: {
      width: '90%',
      height: 50,
      marginHorizontal:10,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  }
})