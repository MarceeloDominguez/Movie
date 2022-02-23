import {useEffect, useState} from 'react';
import {Movie} from '../interfaces/movieInterface';

const API_KEY = '59fac2f751f32b407b1ccad78a44e44b';

export default function useSearchMovie(textValue: string) {
  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  const getSearchMovie = async () => {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&page=1&query=${textValue}`,
      ).then(res => res.json());
      setMovieResults(resp.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, [textValue]);

  return {movieResults};
}
