import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';

type FilmsListType = {
  films: Films;
}

function FilmList ({films}: FilmsListType): JSX.Element {
  const [firstFilm] = films;

  return <FilmCard film={firstFilm} />;
}


export default FilmList;
