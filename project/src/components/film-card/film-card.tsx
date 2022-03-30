import { FilmType } from '../../types/film';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type filmCardType = {
  film: FilmType;
}

function FilmCard({film}: filmCardType): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(true);
  const timer = () => setTimeout(() => setIsPlaying(false), 1000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={() => timerRef.current = timer()}
        onMouseLeave={
          () => {
            setIsPlaying(true);

            if (timerRef.current !== null) {
              clearTimeout(timerRef.current);
            }
          }
        }
      >
        {isPlaying ? <img src={film.src} alt={film.alt} width="280" height="175" /> : <VideoPlayer film={film} isPreview isActive  /> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} >{film.alt}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
