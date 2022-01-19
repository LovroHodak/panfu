import "./App.css";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import mladaDama from "./assets/images/songs/mladaDama.jpg";
import thisMoment from "./assets/images/songs/thisMoment.jpg";
import stoput from "./assets/images/songs/100put.jpg";
import { useState, useEffect } from "react";
import fbIcon from "./assets/images/icons/fb.png";
import ytIcon from "./assets/images/icons/yt.png";
import gmIcon from "./assets/images/icons/gm.png";

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

const panfuSongs = [
  {
    title: "Mlada dama",
    image: mladaDama,
    videoElement: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/gDR_qBWy2hA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "This moment",
    image: thisMoment,
    videoElement: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/SqIHGVdO2aQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "100 put",
    image: stoput,
    videoElement: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/PlvG9Ent_9E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "Mlada dama",
    image: mladaDama,
    videoElement: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/gDR_qBWy2hA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "Mlada dama",
    image: mladaDama,
    videoElement: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/gDR_qBWy2hA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

function App() {
  const navbarItems = ["home", "contact", "music", "band"];

  const [selectedSong, setSelectedSong] = useState();
  const [selectedItem, setSelectedItem] = useState('home')

  useEffect(() => {
    const onScroll = event =>  {
      const height = Math.round(event.target.scrollTop / window.innerHeight * 100)
      console.log(height)
      if (height > 150){
        setSelectedItem('band')
      } else if (height > 75){
        setSelectedItem('music')
      } else if ((height > 50)) {
        setSelectedItem('contact')
      } else {
        setSelectedItem('home')
      }
    }
    document.getElementById('root').addEventListener('scroll', onScroll)
    return () => document.getElementById('root').removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="App">
      <nav>
        <ul>
          {navbarItems.map((item, i) => {
            return (<li data-selected={item === selectedItem} key={i}>{item}</li>)
          })}
        </ul>
      </nav>
      <Title>
        <div>
          <h1>PANFU</h1>
          <h2>Pick A Name For Us</h2>
        </div>
      </Title>
      <Contacts>
        <a>
          <img src={fbIcon} />
        </a>
        <a>
          <img src={ytIcon} />
        </a>
        <a>
          <img src={gmIcon} />
        </a>
      </Contacts>
      <Songs>
        <Carousel responsive={responsive}>
          {panfuSongs.map((song, i) => {
            return (
              <SongItem key={i} onClick={() => setSelectedSong(i)}>
                {selectedSong === i ? (
                  song.videoElement
                ) : (
                  <>
                    <img src={song.image} alt={song.title} />
                    <div>{song.title}</div>
                  </>
                )}
              </SongItem>
            );
          })}
        </Carousel>
      </Songs>
      <About>
        <p>
          The Rolling Stones are an English rock band formed in London in 1962.
          Active for almost six decades, they are one of the most popular and
          enduring bands of the rock era. In the early 1960s, the Rolling Stones
          pioneered the gritty, heavier-driven sound that came to define hard
          rock.[1]
        </p>{" "}
        <p>
          Their first stable line-up comprised vocalist Mick Jagger,
          multi-instrumentalist Brian Jones, guitarist Keith Richards, bassist
          Bill Wyman, and drummer Charlie Watts. During their formative years
          Jones was the primary leader: he assembled the band, named it, and
          drove their sound and image. After Andrew Loog Oldham became the
          group's manager in 1963, he encouraged them to write their own songs.
          Jagger and Richards became the primary creative force behind the band,
          alienating Jones, who developed a drug addiction that interfered with
          his ability to contribute meaningfully. Rooted in blues and early rock
          and roll, the Rolling Stones started out playing covers and were at
          the forefront of the British Invasion in 1964, also being identified
          with the youthful and rebellious counterculture of the 1960s. They
          then found greater success with their own material as "(I Can't Get
          No) Satisfaction" (1965), "Get Off of My Cloud" (1965) and "Paint It
          Black" (1966) became international No. 1 hits. Aftermath (1966) –
          their first entirely original album – is considered the most important
          of their formative records.
        </p>
        <p>
          [2] In 1967, they had the double-sided hit "Ruby Tuesday"/"Let's Spend
          the Night Together" and experimented with psychedelic rock on Their
          Satanic Majesties Request. They returned to their roots with such hits
          as "Jumpin' Jack Flash" (1968) and "Honky Tonk Women" (1969), and
          albums such as Beggars Banquet (1968), featuring "Sympathy for the
          Devil", and Let It Bleed (1969), featuring "You Can't Always Get What
          You Want" and "Gimme Shelter". Let It Bleed was the first of five
          consecutive No. 1 albums in the UK.
        </p>
      </About>
    </div>
  );
}

export default App;

const Title = styled.section`
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
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
  position: sticky;
  top: 16px;
  height: 112px;
  z-index: 1;
  & img {
    width: 32px;
    padding-bottom: 16px;
  }
  @media screen and (max-width: 464px) {
    position: unset;
  }
`;

const SongItem = styled.div`
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



const About = styled.section`
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

const Songs = styled.section`
  padding: 5vh 0;
`;
