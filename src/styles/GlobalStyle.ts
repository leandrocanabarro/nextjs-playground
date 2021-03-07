import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    color: #FFF;
    background-color: #121214;
    font-family: Roboto, sans-serif;
  }
`
