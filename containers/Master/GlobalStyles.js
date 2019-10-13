import { createGlobalStyle } from 'styled-components';

import { theme } from './CommonTheme';

const MasterGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 100%;
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100%;
    background: ${theme.grey};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

export default MasterGlobalStyle;
