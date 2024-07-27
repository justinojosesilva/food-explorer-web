import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400 };
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: "Roboto", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: "Poppins", sans-serif; */
    /* font-family: "DM Sans", sans-serif; */
  }

  a {
    text-decoration: none;
  }
`