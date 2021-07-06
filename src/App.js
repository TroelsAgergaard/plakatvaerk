/** @jsxImportSource @emotion/react */
import { css, Global, ThemeProvider } from "@emotion/react";
import { Router, Link } from "@reach/router";
import "./App.css";
import resetCss from "./resetCss";
import Navbutton from "./components/Navbutton";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Welcome from "./components/Welcome";
import { IconContext } from "react-icons";
import { BiX, BiCheck } from "react-icons/bi";

const themeColors = {
  colors: {
    primary: "#b8bfc2",
    active: "#00a3d2",
    heading: "#123750",
    alert: "#ef006b",
    succes: "#00ef81",
  },
};

const styles = css`
  .heading {
    color: ${themeColors.colors.heading};
    font-size: 1.8rem;
    vertical-align: sub;
  }
  &.main {
    display: flex;
    flex-grow: 1;
    padding: 25px 0;
  }
  .flex-container {
    flex-grow: 1;
    display: flex;
  }
`;

function App() {
  return (
    <IconContext.Provider value={{ style: { fontSize: "1.5rem" } }}>
      <ThemeProvider theme={themeColors}>
        <Global styles={resetCss} />
        <header css={styles} className="flexContainer">
          <Link to="/">
            <Navbutton color={themeColors.colors.alert}>
              <BiX />
            </Navbutton>
          </Link>
          <Router>
            <Title path="/" title="plakatværk" className="heading" />
            <Title path="view/:param" />
          </Router>
          <Navbutton color={themeColors.colors.succes}>
            <BiCheck />
          </Navbutton>
        </header>
        {/* <main css={styles} className="main"> */}
        <main css={styles} className="main">
          <Router className="flex-container">
            <Welcome path="/" />
          </Router>
        </main>
        <footer css={styles}>
          <Nav />
        </footer>
      </ThemeProvider>
    </IconContext.Provider>
  );
}

export default App;
