import { useState } from "react";

import styled from "styled-components";
import Carousel from "react-multi-carousel";

import { panfuSongs } from "../helpers/data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


export default function Songs() {

  const [youtubePanfu] = useState(panfuSongs)
  const [selectedSong, setSelectedSong] = useState();

  return (
    <SongsPanfu>
      <Carousel responsive={responsive}>
        {youtubePanfu.map((song, i) => {
          return (
            <SongItemPanfu key={i} onClick={() => setSelectedSong(i)}>
              {selectedSong === i ? (
                song.videoElement
              ) : (
                <>
                  <img src={song.image} alt={song.title} />
                  <div>{song.title}</div>
                </>
              )}
            </SongItemPanfu>
          );
        })}
      </Carousel>
    </SongsPanfu>
  );
}

const SongsPanfu = styled.section`
  padding: 5vh 0;
`;

const SongItemPanfu = styled.div`
  height: 35vh;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: black;
  margin: 48px;
  @media screen and (max-width: 464px) {
    margin: 16px;
  }
  & > img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    transition: transform 0.7s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  & > div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #00000099;
    padding: 8px 32px;
  }
  & iframe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
