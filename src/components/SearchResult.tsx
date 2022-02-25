import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useDarkMode} from '../context/ThemeContext';

const WIDTH = Dimensions.get('window').width - 40;

interface Props {
  movies: Movie;
}

export default function SearchResult({movies}: Props) {
  const {colors} = useDarkMode();
  const {id} = movies;
  const navigation = useNavigation();
  const image = `https://image.tmdb.org/t/p/w500/${movies.poster_path}`;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('DetailsScreen', {id}))
      }>
      <Image source={{uri: image}} style={styles.image} resizeMode="contain" />
      <Text numberOfLines={1} style={{...styles.title, color: colors.text}}>
        {movies.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff32',
    marginVertical: 10,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 4,
  },
  image: {
    width: WIDTH / 2,
    height: 300,
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    width: 160,
    height: 25,
    alignSelf: 'center',
  },
});
