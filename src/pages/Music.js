import React, { useState } from "react";
import styled from "styled-components";

import { panfuSongs } from "../helpers/data";

export default function Music() {
  const [youtubePanfu] = useState(panfuSongs);
  const [selectedSong, setSelectedSong] = useState();

  return (
    <MusicContainer>
      {youtubePanfu.map((song, i) => {
        return (
          <MusicItem key={i}  onClick={() => setSelectedSong(i)}>
            {selectedSong === i ? (
              song.videoElement
            ) : (
              <>
                <img src={song.image} alt={song.title} />
                <div>{song.title}</div>
              </>
            )}
          </MusicItem>
        );
      })}
    </MusicContainer>
  );
}

const MusicContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 64px);
  margin: auto;
  max-width: 1000px;
`;

const MusicItem = styled.section`
  width: 300px;
  height: 226px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: black;
  margin: 10px;
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
    text-align: center;
  }
  & iframe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
