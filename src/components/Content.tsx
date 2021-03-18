import { ContentProps, MovieProps } from './../interfaces';
import { MovieCard } from './MovieCard';

export const Content: React.FC<ContentProps> = (props) => {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.genre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map((movie: MovieProps) => (
              <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}