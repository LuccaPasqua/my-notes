import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content:space-around;
  align-items: center;

  margin: 0 5rem;

  @media (max-width: 1030px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;
    gap: 4rem;
    
    html {
      font-size: 87.5%;
    }
  }
`

export const TitleAndDescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  
  .notebookImage{
    width: 20rem;
    position: relative;
    /* top: -5rem;
    left: -5rem; */
    transform: rotate(-15deg);
  }

  .titleDiv {
    position: relative;
    top: -4rem;
    left: -7rem;
  }

  
  h1{
    font-size:6rem;
    color:  ${props => props.theme['blue-300']};
    margin-bottom: 3rem;

    .my{
      color: ${props => props.theme['blue-600']}
    }

    .notes{
      color: ${props => props.theme['blue-500']}
    }

  }

  .paragraphDiv{
    display: flex;
    span{
      width: 5rem;
    }
  }

  p{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['blue-500']};
    max-width: 25rem;
  }

  @media (max-width: 1355px){
    .paragraphDiv{
      span{
        width: 10rem
      }
    }
  }


  @media (max-width: 1030px) {
    .notebookImage{
      width: 15rem;
    }
    .paragraphDiv{
      span{
        width: 0;
      }
    }
    .titleDiv{
      top: 0;
      left: 0;

      h1{
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 570px) {
    .notebookImage{
      width: 10rem;
    }

    .titleDiv{
      h1{
        font-size: 4rem;
      }
    }

    .paragraphDiv{
      font-size: 1rem;
    }
  }
`

export const SignupContainer = styled.div`
  position: relative;
  top: -3rem;
  color: ${props => props.theme['blue-500']};

  display: flex;
  flex-direction: column;
  width: 25rem;

  h2{
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
      height: 3rem;
      padding: 1rem;
    };

    button {
      height: 3rem;
    }

    .createAccount {
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

    .signInWithGoogle {
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

`

export const ErrorMessageContainer = styled.p`
  color: ${props => props.theme['red-300']};
  font-weight: bold;
  font-size: 1rem;
`