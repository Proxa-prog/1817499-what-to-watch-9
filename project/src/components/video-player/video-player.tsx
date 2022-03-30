import { useEffect, useRef, useState } from 'react';
import { FilmType } from '../../types/film';

type VideoType = {
  film: FilmType;
  isPreview: boolean;
  isActive: boolean;
}

function VideoPlayer ({film, isPreview, isActive}: VideoType):JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [film]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.muted = isPreview;
      videoRef.current.play();
    }

    if (!isActive) {
      videoRef.current.load();
    }

  },[isActive, isPreview]);

  return(
    <video width="280" height="175"
      src={film.src}
      muted
      poster={isLoading ? 'Загрузка...': film.posterImage}
      ref={videoRef}
    />
  );
}

export default VideoPlayer;
