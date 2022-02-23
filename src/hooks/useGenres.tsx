import {useEffect, useState} from 'react';
import {Genre} from '../interfaces/genresInterface';

const API_KEY = '59fac2f751f32b407b1ccad78a44e44b';

export const useGenres = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [error, setError] = useState(false);

  const getAllGenres = async () => {
    setError(false);
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`,
      ).then(res => res.json());
      setGenreList(resp.genres);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getAllGenres();
  }, []);

  return {genreList, error};
};
