import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDarkMode} from '../context/ThemeContext';
import {Cast} from '../interfaces/creditsInterface';
import CastItem from './CastItem';

interface Props {
  cast: Cast[];
}

export default function CastDetails({cast}: Props) {
  const {colors} = useDarkMode();
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, color: colors.text}}>Actores</Text>
      <FlatList
        contentContainerStyle={styles.containerFlatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CastItem actor={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  containerFlatlist: {paddingHorizontal: 20},
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
});
