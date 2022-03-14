import {FilmType} from '../../types/film';
import { Link } from 'react-router-dom';

type filmCardType = {
  film: FilmType;
}


function FilmCard({film}: filmCardType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.src} alt={film.alt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} >{film.alt}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
