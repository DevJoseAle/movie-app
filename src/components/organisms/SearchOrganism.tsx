import React from 'react'
import { Text, View } from 'react-native'
import { Title } from '../atoms/Title'
import { SearchInput } from '../molecules/SearchInput'

export const SearchOrganism = () => {

    const appTitle = `
    ¡Busca tu 
    Película Favorita!
    `;
  return (
    <>
        <Title 
        title={appTitle} 
        marginTop={-20}
        marginBottom={-10} />

        <SearchInput />
    </>
  )
}
