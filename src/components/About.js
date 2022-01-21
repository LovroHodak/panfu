import React, {useState} from "react";
import styled from "styled-components";

import { aboutPanfu } from "../helpers/data";

export default function About() {
  const [about] = useState(aboutPanfu)
  console.log(about)
  return (
    <AboutPanfu>
      {about.map((abo, i) => {
        return (<p key={i}>{abo}</p>)
      })}
    </AboutPanfu>
  );
}

const AboutPanfu = styled.section`
  padding: 20vh 0;
  & > p {
    width: 60%;
    margin: 16px auto;
    padding: 16px 32px;
    font-size: 1.4rem;
    background-color: #000000cc;
    @media screen and (max-width: 464px) {
      font-size: 1.1rem;
      line-height: 1.7rem;
      width: calc(100% - 64px);
      padding: 16px 16px;
    }
  }
`;
