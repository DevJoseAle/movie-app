import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/AppTheme'
import { Title } from '../atoms/Title';


interface Props{
    plot: string;
    released: string;
    runtime: string;
    actors: string;
    director: string;
}
export const MovieDetails = ({
    plot,
    released,
    runtime,
    actors,
    director
    }: Props) => {

  return (
    <View style={[globalStyles.globalMargin, {marginTop: 20}]}>
      <View style={styles.detailsContainer}>
        <Title title={'Resumen:'} size={25} />
        <Text style={styles.subtitles}>{plot}</Text>
        <Title title={'Estreno:'} size={25} />
        <Text style={styles.subtitles}>{released}</Text>
        <Title title={'Duración:'} size={20} />
        <Text style={styles.subtitles}>{runtime}</Text>
        <Title title={'Director:'} size={25} />
        <Text style={styles.subtitles}>{director}</Text>
        <Title title={'Reparto:'} size={25} />
        <Text style={styles.subtitles}>{actors}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    detailsContainer:{
    
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitles:{
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFFBF',
        marginVertical: 10
    }
})