import { createGlobalStyle } from "styled-components";
import { ColorsM } from "../tokens/models/color.model";

type GlobalStylesProps = {
  theme?: {
    TOKENS: ColorsM;
  };
};

// @ts-ignore
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    //border: 1px solid red !important;
  }


  * {
    margin: 0;
    font-family: sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.TOKENS.P01.i800};
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  button {
    cursor: pointer;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
