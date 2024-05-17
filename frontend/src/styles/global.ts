import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  
  body{
    background-color: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 570px) {
    html {
      font-size: 75%;
    }
  }
`