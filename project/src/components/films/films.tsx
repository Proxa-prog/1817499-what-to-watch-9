import FilmCard from '../film-card/film-card';
import {FilmsType} from '../../types/film';

type FilmsListType = {
  films: FilmsType;
}

function Films({films}: FilmsListType): JSX.Element {
  return (
    <>
      {films.map((item) => <FilmCard film={item} key={item.id} />)}
    </>
  );
}

export default Films;
