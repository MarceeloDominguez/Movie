import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MoviesPoster from './MoviesPoster';
import {useDarkMode} from '../context/ThemeContext';

interface Props {
  movies: Movie[];
  title?: string;
}

export default function HorizontalSlider({movies, title}: Props) {
  const {colors} = useDarkMode();

  return (
    <View style={styles.container}>
      {title && (
        <Text style={{...styles.title, color: colors.text}}>{title}</Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <MoviesPoster
            movie={item}
            width={140}
            height={200}
            marginHorizontal={10}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  title: {
    height: 32,
    textAlignVertical: 'center',
    paddingLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
