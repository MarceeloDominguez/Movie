import React, {useEffect, useState} from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';

const API_KEY = '59fac2f751f32b407b1ccad78a44e44b';

interface MovieDetails {
  movieFull: MovieFull | undefined;
  cast: Cast[];
}

export default function useDetailsMovie(idMovie: number) {
  const [movieFull, setMovieFull] = useState<MovieDetails>({
    movieFull: undefined,
    cast: [],
  });

  const getDetailsMovie = async () => {
    const movieDetailsPromise = await fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());

    const castPromise = await fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${API_KEY}&language=es-ES`,
    ).then(res => res.json());

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setMovieFull({
      movieFull: movieDetailsResp,
      cast: castResp.cast,
    });
  };

  useEffect(() => {
    getDetailsMovie();
    return () => {
      setMovieFull({movieFull: undefined, cast: []});
    };
  }, []);

  return {...movieFull};
}
