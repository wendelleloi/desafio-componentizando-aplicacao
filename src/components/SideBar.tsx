import { useEffect, useState } from 'react';

import './../styles/sidebar.scss';

import { api } from './../services/api';

import { GenreResponseProps, selectedGenreIdFunctionProps } from './../interfaces';

import { Button } from './Button';

export const SideBar: React.FC<selectedGenreIdFunctionProps> = (props) => {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
 

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  function handleClick(id:number) {
    props.handleClickButtonProps(id)
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}