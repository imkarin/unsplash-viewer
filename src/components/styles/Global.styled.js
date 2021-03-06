import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: 'Inter', Helvetica, sans-serif;
    font-size: ${({theme}) => theme.typography.body.size};
    font-weight: ${({theme}) => theme.typography.body.weight};
    letter-spacing: ${({theme}) => theme.typography.body.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
    height: 100%;
    overflow-x: hidden;
  }

  .app {
    height: 100vh;
  }
  
  img {
    max-width: 100%;
  }
  
  button, input {
    font-family: 'Inter', Helvetica, sans-serif;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  // Sections
  section {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  
  // Typography based on theme
  h1 {
    font-family: 'Lora', Helvetica, sans-serif;
    font-size: ${({theme}) => theme.typography.h1.size};
    font-weight: ${({theme}) => theme.typography.h1.weight};
    letter-spacing: ${({theme}) => theme.typography.h1.letterSpacing};
    color: ${({theme}) => theme.colors.nightsky};
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 33px;
    }
  }
  
  h2 {
    font-size: ${({theme}) => theme.typography.h2.size};
    font-weight: ${({theme}) => theme.typography.h2.weight};
    letter-spacing: ${({theme}) => theme.typography.h2.letterSpacing};
    color: ${({theme}) => theme.colors.nightsky};
    grid-column: 1 / -1;
  }

  h3 {
    font-size: ${({theme}) => theme.typography.h3.size};
    font-weight: ${({theme}) => theme.typography.h3.weight};
    letter-spacing: ${({theme}) => theme.typography.h3.letterSpacing};
    color: ${({theme}) => theme.colors.nightsky};
  }

  .body-smaller {
    font-size: ${({theme}) => theme.typography.bodySmaller.size};
    font-weight: ${({theme}) => theme.typography.bodySmaller.weight};
    letter-spacing: ${({theme}) => theme.typography.bodySmaller.letterSpacing};
    color: ${({theme}) => theme.colors.cloudDark};
  }

  button {
    font-size: ${({theme}) => theme.typography.button.size};
    font-weight: ${({theme}) => theme.typography.button.weight};
    letter-spacing: ${({theme}) => theme.typography.button.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

  .caption {
    font-size: ${({theme}) => theme.typography.caption.size};
    font-weight: ${({theme}) => theme.typography.caption.weight};
    letter-spacing: ${({theme}) => theme.typography.caption.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

  .overline {
    font-size: ${({theme}) => theme.typography.overline.size};
    font-weight: ${({theme}) => theme.typography.overline.weight};
    letter-spacing: ${({theme}) => theme.typography.overline.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

`

export default GlobalStyles
