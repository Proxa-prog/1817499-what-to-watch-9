import { type } from "os";
import { ComponentType, useState } from "react";
import VideoPlayer from "../../components/video-player/video-player";
import { FilmType } from "../../types/film";

type HOCProps = {
  renderPlayer: (film: FilmType) => void
};

function withVideoPlayer<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

    type ComponentProps = Omit<T, keyof HOCProps>;

    function WithVideoPlayer(props: ComponentProps): JSX.Element {
      const [activePlayerId, setActivePlayerId] = useState(0);

      return(
        <Component
          {...props as T}
          renderPlayer = {(film: FilmType) => (
            <VideoPlayer
              film={film}
              isPreview
              isActive
            />
          )}
        />
      );
    }
    return WithVideoPlayer;
  }

  export default withVideoPlayer;
