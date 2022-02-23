import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';
import useDetailsMovie from '../hooks/useDetailsMovie';
import AsideImageDetails from '../components/AsideImageDetails';
import CastDetails from '../components/CastDetails';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailsScreen'> {}

export default function DetailsScreen({route, navigation}: Props) {
  const movie = route.params;
  const {movieFull, cast} = useDetailsMovie(movie.id);

  if (!movieFull) return null;

  const image = `https://image.tmdb.org/t/p/w500/${movieFull.poster_path}`;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Detalles de la Película</Text>
      </View>
      <TouchableOpacity
        style={styles.iconChevron}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={22} color="#fff" />
      </TouchableOpacity>
      <View style={styles.containerImage}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.containerAside}>
          <AsideImageDetails movieFull={movieFull} />
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{movieFull.title}</Text>
      </View>
      <View style={styles.containerOverview}>
        <Text style={styles.titleOverview}>Descripción</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>
      </View>
      <CastDetails cast={cast} />

      <Text style={styles.budget}>
        Presupuesto {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
      </Text>
      <Text style={styles.revenue}>
        Recaudación {currencyFormatter.format(movieFull.revenue, {code: 'USD'})}
      </Text>

      <Text style={styles.date}>
        Fecha de estreno: {movieFull.release_date}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  iconChevron: {
    position: 'absolute',
    top: 9,
    left: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 12,
  },
  containerImage: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  containerAside: {
    flex: 1,
    marginLeft: 20,
  },
  containerTitle: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    height: 40,
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff32',
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
  containerOverview: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff32',
    marginHorizontal: 20,
  },
  titleOverview: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  overview: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '700',
    opacity: 0.6,
    marginBottom: 10,
  },
  budget: {
    color: '#fff',
    marginLeft: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 12,
    marginTop: 10,
  },
  revenue: {
    color: '#fff',
    marginLeft: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 12,
    marginBottom: 60,
    marginTop: 10,
  },
  date: {
    color: '#fff',
    marginLeft: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 12,
    marginBottom: 60,
  },
});
