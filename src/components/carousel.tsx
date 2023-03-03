import { memo } from 'react';

import type { IMovie } from '../types';

interface IProps {
  movies: IMovie[] | undefined;
}

function Carousel({ movies }: IProps) {
  return (
    <div className="flex-row-between carousel">
      {movies?.map((movie) => (
        <div key={movie?.imdbID} className="flex-col-between carousel-item">
          <div
            className="one-poster"
            style={{ backgroundImage: `url(${movie?.Poster})` }}
          ></div>
          <div className="sub-title">{movie?.Title}</div>
        </div>
      ))}
    </div>
  );
}

export default memo(Carousel);
