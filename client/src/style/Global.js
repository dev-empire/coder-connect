import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, *{
  margin: 0;
  padding: 0;
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f4f4f4;
    overflow: hidden;
    a {
      text-decoration: none;
    }
    .container {
      width: 80%;
      margin: auto;
      overflow: hidden;
      height: 100%;
    }
  }
}
`
