import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../context/ThemeContext';

interface Props {
  movieFull: MovieFull;
}

export default function AsideImageDetails({movieFull}: Props) {
  const {vote_average} = movieFull;
  const {colors} = useDarkMode();

  const convertMinsToTime = (mins: number) => {
    let hours = Math.floor(mins / 60);
    let minutes: number | string = mins % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours ? `${hours}h: ` : ''}${minutes}min`;
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.containerSquare, borderColor: colors.border}}>
        <Text style={{...styles.TextGenres, color: colors.text}}>Géneros</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{...styles.genres, color: colors.text}}>
            {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </ScrollView>
      </View>
      <View style={{...styles.containerSquare, borderColor: colors.border}}>
        <Text style={{...styles.duration, color: colors.text}}>Duración</Text>
        <Icon
          name="time-outline"
          size={16}
          color={colors.text}
          style={styles.iconClock}
        />
        <Text style={{...styles.runtime, color: colors.text}}>
          {convertMinsToTime(movieFull.runtime)}
        </Text>
      </View>
      <View style={{...styles.containerSquare, borderColor: colors.border}}>
        <Text style={{...styles.textRating, color: colors.text}}>Rating</Text>
        <Icon
          name="star-sharp"
          size={16}
          color="#ffc205"
          style={styles.rating}
        />
        <Text style={{...styles.vote, color: colors.text}}>
          {vote_average}/10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerSquare: {
    borderWidth: 1,
    borderRadius: 8,
    height: 90,
    alignItems: 'center',
  },
  TextGenres: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  genres: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlignVertical: 'center',
    borderRadius: 4,
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 4,
  },
  iconClock: {
    marginVertical: 10,
  },
  runtime: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  duration: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  textRating: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  rating: {
    marginVertical: 6,
  },
  vote: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
});
