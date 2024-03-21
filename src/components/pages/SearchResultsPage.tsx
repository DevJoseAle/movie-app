import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../config/theme/AppTheme'
import { SearchInput } from '../molecules/SearchInput';

export const SearchResultsPage = () => {

  return (
    <View style={ globalStyles.mainContainer}>
      <View style={{marginBottom: 20}}/>
      <SearchInput searchTerm={''} setSearchTerm={() => {}} />
    </View>
  )
}
