/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, jsx, Global, ThemeProvider } from "@emotion/react";

import "./App.css";
import resetCss from "./resetCss";

import Navitem from "./components/Navitem";
import Navbutton from "./components/Navbutton";

import { IconContext } from "react-icons";
import {
  BiCrop,
  BiImageAdd,
  BiText,
  BiCreditCard,
  BiX,
  BiCheck,
} from "react-icons/bi";

const themeColors = {
  colors: {
    primary: "#b8bfc2",
    active: "#00a3d2",
    heading: "#123750",
  },
};

const styles = css`
  .heading {
    color: ${themeColors.colors.heading};
    font-size: 1.8rem;
    vertical-align: sub;
  }
  .main {
  }
`;

function App() {
  let [iconAlt, setIconAlt] = useState(true);

  return (
    <IconContext.Provider value={{ style: { fontSize: "1.5rem" } }}>
      <ThemeProvider theme={themeColors}>
        <Global styles={resetCss} />
        <header className="flexContainer">
          <Navbutton>
            <BiX />
          </Navbutton>
          <h1 className="heading">Plakatværk</h1>
          <Navbutton>
            <BiCheck />
          </Navbutton>
        </header>
        <main className="main"></main>
        <footer>
          <nav className="flexContainer">
            <Navitem altText="Start" iconAlt={iconAlt} setIconAlt={setIconAlt}>
              <BiImageAdd />
            </Navitem>
            <Navitem altText="Juster" iconAlt={iconAlt} setIconAlt={setIconAlt}>
              <BiCrop />
            </Navitem>
            <Navitem altText="Tekst" iconAlt={iconAlt} setIconAlt={setIconAlt}>
              <BiText />
            </Navitem>
            <Navitem altText="Bestil" iconAlt={iconAlt} setIconAlt={setIconAlt}>
              <BiCreditCard />
            </Navitem>
          </nav>
        </footer>
      </ThemeProvider>
    </IconContext.Provider>
  );
}

export default App;
