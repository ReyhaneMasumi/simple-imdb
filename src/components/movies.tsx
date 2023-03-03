import { useEffect, useState } from 'react';

import Carousel from './carousel';
import { apiKey, movieIDs } from '../config';

import type { IMovie } from '../types';

function Movies() {
  const [movies, setMovies] = useState<Array<IMovie>>();

  useEffect(() => {
    for (const id of movieIDs) {
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then((response) => response.json())
        .then((response: IMovie) => {
          if (response?.Title)
            setMovies((curr: Array<IMovie> | undefined) => [
              ...new Set([...(curr ?? []), response]),
            ]);
        });
    }

    return () => {
      setMovies([]);
    };
  }, []);

  return (
    <div className="flex-col-between recent-posters">
      <h2 className="sub-title">Recent Movies</h2>
      <Carousel movies={movies} />
    </div>
  );
}

export default Movies;
