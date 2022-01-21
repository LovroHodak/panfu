import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { contacts } from "../helpers/data";


export default function Contacts() {
  const [social] = useState(contacts);

  const [changePosition, setChangePosition] = useState('sticky')


  useEffect(() => {
    const onScroll = (event) => {
      const height = Math.round(
        (event.target.scrollTop / window.innerHeight) * 100
      );
      console.log(height);
      if (height > 165) {
        setChangePosition('unset')
      } else {
        setChangePosition('sticky')
      }
    };

    document.getElementById("root").addEventListener("scroll", onScroll);
    
    return () =>
      document.getElementById("root").removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ContactsIcons style={{position: changePosition}}>
      {social.map((soc, i) => {
        return (
          <div key={i}>
            <a href={soc.link} target="blank">
              <img src={soc.image} alt={soc.name} />
            </a>
          </div>
        );
      })}
    </ContactsIcons>
  );
}

const ContactsIcons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
  //position: sticky;
  top: 16px;
  height: 112px;
  z-index: 1;
  & img {
    width: 32px;
    padding-bottom: 16px;
  }
  @media screen and (max-width: 464px) {
    //position: unset;
  }
`;
