import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import styled from "@emotion/styled";

import ReactPlayer from "react-player/lazy";

const MediaWrapper = styled.div``;
const MediaContent = styled.div``;
const PlayerWrapper = styled.div`
  display: block;
  position: relative;
  min-height: 1px;
  & {
    video {
      display: block;
      max-height: calc(100vh - 2 * var(--gap-md));
      max-width: calc(100vw - 2 * var(--gap-md));
      margin: 0 auto;
      width: auto !important;
      height: auto !important;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

const MediaPlayer = ({ url, light, playing, ...props }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (playing && inView) {
      setReady(true);
    }
  }, [playing, inView, url]);

  return (
    <MediaWrapper {...props}>
      <MediaContent>
        <PlayerWrapper ref={ref}>
          {ready && url?.length && (
            <ReactPlayer
              url={url}
              light={light}
              loop={true}
              playing={playing && inView}
              height={"100%"}
              width={"100%"}
            />
          )}
        </PlayerWrapper>
      </MediaContent>
    </MediaWrapper>
  );
};

export { MediaWrapper, MediaContent, PlayerWrapper, MediaPlayer };

export default MediaPlayer;
