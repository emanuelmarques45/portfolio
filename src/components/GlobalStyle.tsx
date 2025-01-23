import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-light-blue: ;
    --clr-dim-gray: #696773;
    --clr-slate-gray: ;
    --clr-white: ;

    --sz-1: 0.4rem;
    --sz-2: 0.8rem;
    --sz-3: 1rem;
    --sz-4: 1.2rem;
    --sz-5: 1.6rem;
    --sz-6: 2rem;
    --sz-7: 4rem;
    --sz-8: 6rem;
    --sz-9: 8rem;
    --sz-10: 10rem;

    --fz-1: 1rem;
    --fz-2: 1.6rem;
    --fz-3: 2rem;
    --fz-4: 2.6rem;
    --fz-5:3.2rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: 'General Sans', sans-serif;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: ${(props) => props.theme.neutralDark};
    color: ${(props) => props.theme.neutral};
  }

  #root {
    height: 100%;
    margin-inline: auto;
    max-width: 90%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export const darkTheme: DefaultTheme = {
  primary: "#457B9D",
  primaryLight: "#93B7BE",
  secondary: "#7E8F99",
  secondaryLight: "#8AA2A9",
  neutral: "#FEFFFE",
  neutralDark: "#0a0a0a",
};
