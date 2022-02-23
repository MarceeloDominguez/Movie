import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {CommonActions, useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

export default function MoviesPoster({
  movie,
  marginHorizontal,
  width,
  height = 420,
}: Props) {
  const navigation = useNavigation();
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const {id} = movie;

  return (
    <TouchableOpacity
      style={{height, width, marginHorizontal}}
      activeOpacity={0.7}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('DetailsScreen', {id}))
      }>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: image}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    shadowColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
  },
  img: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#1f1f1f',
  },
});
