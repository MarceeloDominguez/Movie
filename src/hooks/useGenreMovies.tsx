import {useEffect, useState} from 'react';
import {Movie} from '../interfaces/movieInterface';

const API_KEY = '59fac2f751f32b407b1ccad78a44e44b';

export const useGenreMovies = (genreSelected: number) => {
  const [genreMovies, setGenreMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getGenreMovies = async () => {
    setLoading(true);
    setError(false);
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreSelected}&language=es-ES`,
      ).then(res => res.json());
      setGenreMovies(resp.results);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getGenreMovies();
  }, [genreSelected]);

  return {genreMovies, loading, error};
};
