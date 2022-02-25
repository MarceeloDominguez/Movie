import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Error from '../components/Error';
import HeaderHome from '../components/HeaderHome';
import HorizontalSlider from '../components/HorizontalSlider';
import Loading from '../components/Loading';
import MoviesPoster from '../components/MoviesPoster';
import Search from '../components/Search';
import {useDarkMode} from '../context/ThemeContext';
import {useGenreMovies} from '../hooks/useGenreMovies';
import {useGenres} from '../hooks/useGenres';
import {useMovies} from '../hooks/useMovies';

const WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  const {colors} = useDarkMode();

  const [genreSelected, setGenreSelected] = useState(28);
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {genreList, error} = useGenres();
  const {
    genreMovies,
    loading,
    error: errorMovies,
  } = useGenreMovies(genreSelected);

  const onChangeGenre = (itemId: number) => {
    setGenreSelected(itemId);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: colors.background}}>
      <HeaderHome />
      <Search />
      <Text style={{...styles.title, color: colors.text}}>Categorias</Text>
      {error && <Error />}
      <ScrollView
        horizontal
        contentContainerStyle={styles.containerButton}
        showsHorizontalScrollIndicator={false}>
        {genreList.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => onChangeGenre(item.id)}
            style={[
              styles.button,
              {
                backgroundColor:
                  item.id === genreSelected ? 'red' : colors.card,
              },
            ]}>
            <Text style={styles.nameButton}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{height: 430}}>
        {errorMovies && <Error />}
        {loading ? (
          <Loading />
        ) : (
          <Carousel
            data={genreMovies}
            sliderWidth={WIDTH}
            itemWidth={WIDTH * 0.7}
            renderItem={({item}) => <MoviesPoster movie={item} />}
            inactiveSlideShift={30}
            inactiveSlideOpacity={0.5}
          />
        )}
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.containerHorizontalSlider}>
          <HorizontalSlider
            movies={nowPlaying}
            title="Agregadas recientemente"
          />
          <HorizontalSlider movies={popular} title="Populares" />
          <HorizontalSlider movies={topRated} title="Mejores valoradas" />
          <HorizontalSlider movies={upcoming} title="Próximas a salir" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  containerButton: {
    marginBottom: 22,
    opacity: 0.6,
  },
  button: {
    marginHorizontal: 10,
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  nameButton: {
    textAlign: 'center',
    letterSpacing: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  containerHorizontalSlider: {marginTop: 10, marginBottom: 40},
});
