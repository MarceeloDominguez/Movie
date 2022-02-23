import React, {useEffect, useState} from 'react';
import {Movie} from '../interfaces/movieInterface';

const API_KEY = '59fac2f751f32b407b1ccad78a44e44b';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());
    const nowPopularPromise = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());
    const nowTopRatedPromise = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());
    const nowUpComingPromise = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());

    const resp = await Promise.all([
      nowPlayingPromise,
      nowPopularPromise,
      nowTopRatedPromise,
      nowUpComingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].results,
      popular: resp[1].results,
      topRated: resp[2].results,
      upcoming: resp[3].results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    return () => {
      setMoviesState({nowPlaying: [], popular: [], topRated: [], upcoming: []});
    };
  }, []);

  return {...moviesState, isLoading};
};
