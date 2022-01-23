import { useState, useEffect } from "react";
import styled from "styled-components";

import { navbarItems } from "../helpers/data";

export default function Navv() {
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const [hrefLink, setHrefLink] = useState("/");

  useEffect(() => {
    const onScroll = (event) => {
      const height = Math.round(
        (event.target.scrollTop / window.innerHeight) * 100
      );
      //console.log(height);
      if (height > 150) {
        setSelectedNavItem("band");
      } else if (height > 75) {
        setSelectedNavItem("music");
      } else if (height > 50) {
        setSelectedNavItem("contact");
      } else {
        setSelectedNavItem("home");
      }
    };

    document.getElementById("root").addEventListener("scroll", onScroll);

    return () =>
      document.getElementById("root").removeEventListener("scroll", onScroll);
  }, []);



  return (
    <NavPanfu>
      <ul>
        {navbarItems.map((item, i) => {
          return (
            <li data-selected={item === selectedNavItem} key={i}>
              <a href={hrefLink}>{item}</a>
            </li>
          );
        })}
      </ul>
    </NavPanfu>
  );
}

const NavPanfu = styled.nav`
  color: white;
  height: 80px;
  padding: 16px;
  @media screen and (max-width: 464px) {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #000000bb;
    height: 20px;
    margin-bottom: 60px;
  }
  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 464px) {
      gap: 16px;
    }
    & > li {
      list-style: none;
      text-transform: uppercase;
      font-size: 1.5rem;
      opacity: 0.8;
      @media screen and (max-width: 464px) {
        font-size: 1rem;
      }
      & > a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    & > li[data-selected="true"] {
      font-weight: bolder;
      opacity: 1;
    }
  }
`;
