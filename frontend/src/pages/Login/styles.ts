import styled from "styled-components";


export const LoginPageContainer = styled.div`
  h1{
    font-size:4rem;
    color:  ${props => props.theme['blue-300']};
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    .my{
      color: ${props => props.theme['blue-600']}
    }

    .notes{
      color: ${props => props.theme['blue-500']}
    }
  }
  
  
`

export const TypesOfLoginContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  div {
    display: flex;
    flex-direction: column;
    width:30vw ;
    justify-content: center;

    h2{
      color: ${props => props.theme['blue-500']};
      margin-bottom: 1rem;
    }

    form{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;

      input {
        height: 3rem;
        padding: 1rem;
      }

      button {
        height: 3rem;
      }

      .enterAccount {
        border: 0;
        border-radius: 8px;
        font-weight: bold;
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['blue-500']};

        &:disabled{
          opacity: 0.7;
          cursor: not-allowed;
        }
      }

      .logInWithGoogle {
        border: 1px solid ${props => props.theme['gray-300']};
        border-radius: 8px;
        color: ${props => props.theme['gray-900']};
        background-color: ${props => props.theme['white']};
        display: flex;
        align-items: center;
        justify-content: center;

        img{
          height: 2.5rem;
        }
      }
    }

    a {
      color: ${props => props.theme['blue-500']}; 
      font-weight: bold;
      text-decoration: none;
      font-size: 1.2rem;
      background-color: transparent;
    }

    a:link {
      color: ${props => props.theme['blue-500']};    
    }

    a:hover {
      color: ${props => props.theme['blue-300']};
      
    }
  }

` 

export const ErrorMessageContainer = styled.p`
  color: ${props => props.theme['red-300']};
  font-weight: bold;
  font-size: 1rem;
`