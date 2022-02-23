import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export default function CastItem({actor}: Props) {
  const image = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <View>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      ) : (
        <View style={styles.noProfile} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  noProfile: {
    height: 50,
    width: 50,
    backgroundColor: '#ccc',
    borderRadius: 100,
  },
});
