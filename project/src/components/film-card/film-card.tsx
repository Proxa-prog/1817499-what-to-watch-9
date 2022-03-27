import { FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
// import VideoPlayer from '../video-player/video-player';
// import withVideoPlayer from '../../hocs/with-video-player/with-video-player';


type filmCardType = {
  film: FilmType;
  // playVideoPlayer: () => void;
  renderPlayer: (film: FilmType) => JSX.Element;
}

// type VideoType = {
//   film: FilmType;
//   isPreview: boolean;
//   isActive: boolean;
// }


function FilmCard({film, renderPlayer}: filmCardType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card"// onMouseEnter={}
>
      <div className="small-film-card__image">
        <img src={film.src} alt={film.alt} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} >{film.alt}</Link>
      </h3>
      {renderPlayer(film)}
      {/* <VideoPlayer film={film} isPreview isActive /> */}
    </article>
  );
}

export default FilmCard;
