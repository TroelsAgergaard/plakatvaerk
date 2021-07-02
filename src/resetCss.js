/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const resetCss = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(239, 241, 243, 1) 100%
    );
    height: 100vh;
  }
`;

export default resetCss;
