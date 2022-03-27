import FilmCard from '../film-card/film-card';
import {FilmsType, FilmType} from '../../types/film';
// import {useState} from 'react';

type FilmsListType = {
  films: FilmsType;
  renderPlayer: (film: FilmType) => JSX.Element;
}

function Films({films}: FilmsListType): JSX.Element {
  // const [currentFilm, setCurrentFilm] = useState(films[0]);

  return (
    <>
      {films.map((item) => <FilmCard film={item} key={item.id} />)}
    </>
  );
}

export default Films;
