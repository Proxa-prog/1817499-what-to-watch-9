import { FilmsType } from '../../types/film';
import FilmCard from '../film-card/film-card';

type myListType = {
  films: FilmsType;
}

function MyList({ films }: myListType):JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="catalog__films-list">
        {films.map((item) => <FilmCard film={item} key={item.id} /> )}
      </div>
    </section>
  );
}

export default MyList;
