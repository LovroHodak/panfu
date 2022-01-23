import React from "react";

import Contacts from "../components/Contacts";
import Title from "../components/Title";
import About from "../components/About";
import Songs from "../components/Songs";

export default function Home() {
  return (
    <div>
      <Title />
      <Contacts />
      <Songs />
      <About />
    </div>
  );
}
