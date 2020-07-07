import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colors.mainBodyBackground};
    font-family: ${props => props.theme.fonts.fontFamily};
    font-size: ${props => props.theme.fonts.defaultSize};
    color: ${props => props.theme.text.color};
  }

  a {
    color: ${props => props.theme.text.color};
  }

  code {
    font-family: ${props => props.theme.fonts.fontFamilyCode};
  }

  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100vh;
  }

  #gatsby-focus-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`
