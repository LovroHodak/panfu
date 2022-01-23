import React from "react";
import styled from "styled-components";

import { galleryPanfu } from "../helpers/data";

export default function Gallery() {
  return (
    <GalleryContainer>
      {galleryPanfu.map((imag, i) => {
        return (
          <GalleryItem key={i}>
            <img src={imag.image} alt='galleryPhotos' />
          </GalleryItem>
        );
      })}
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 64px);
  margin: auto;
  max-width: 1000px;
`;

const GalleryItem = styled.section`
  width: 300px;
  overflow: hidden;
  margin: 10px;
  & > img {
    box-sizing: border-box;
    border: 2px solid red;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;
