import React from "react";
import styled from "styled-components";

export default function Title() {
  return (
    <TitlePanfu>
      <div>
        <h1>PANFU</h1>
        <h2>Pick A Name For Us</h2>
      </div>
    </TitlePanfu>
  );
}

const TitlePanfu = styled.section`
  color: white;
  height: calc(100vh - 112px - 112px);
  padding: auto;
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    & > h1 {
      font-size: 300px;
      padding: 0;
      margin: 0;
      transform: translateY(30px);
      @media screen and (max-width: 464px) {
        font-size: 80px;
        transform: translateY(0);
      }
      @media screen and (max-width: 1024px) and (min-width: 465px) {
        font-size: 140px;
        transform: translateY(0);
      }
    }
    & > h2 {
      font-size: 110px;
      padding: 0;
      margin: 0;
      font-weight: normal;
      transform: translateY(-30px);
      @media screen and (max-width: 464px) {
        font-size: 24px;
        transform: translateY(0);
      }
      @media screen and (max-width: 1024px) and (min-width: 465px) {
        font-size: 48px;
        transform: translateY(0);
      }
    }
  }
`;
