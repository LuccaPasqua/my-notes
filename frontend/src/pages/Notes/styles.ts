import styled from "styled-components";

export const NotesPageContainer = styled.div`
  margin-bottom: 10rem;
  h1{
    font-size:4rem;
    color:  ${props => props.theme['blue-300']};
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    /* margin-bottom: 0rem; */

    .my{
      color: ${props => props.theme['blue-600']}
    }

    .notes{
      color: ${props => props.theme['blue-500']}
    }
  }
`

export const NotLoggedPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap:1rem;

  h2{
    color: ${props => props.theme['red-500']};
    margin-bottom: 2rem;
  }

  button {
    height: 3rem;
    padding: 1rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['blue-500']};
    font-weight: bold;
    border-radius: 8px;

    a{
      text-decoration: none;
      color: ${props => props.theme['white']};   
      width : 100% ;
    };

    a:link {
      color: ${props => props.theme['white']};    
    }

    a:hover {
      color: ${props => props.theme['white']};
      
    }
  }

  button:hover {
    background-color: blue;
  }
`

export const UserLoggedPage = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotesContainer = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;

  border: 1px solid ${props => props.theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;
`

export const NotesGridContainer = styled.div`
  padding-top: 2rem;
  width: 80vw;
  margin: auto;


  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;

    div {
      height: 15rem;
      width: 15rem;
      background-color: ${props => props.theme['white']};
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0px 0px 3px ${props => props.theme['gray-400']};
      gap:0;
      text-align: left;

      div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height:min-content;
        background-color: ${props => props.theme['blue-500']};
        padding: 0.7rem;
        border-radius: 8px 8px 0 0;

        h2 {
         
          color: ${props=> props.theme['white']};
          text-align: left;
          max-width: calc(100% - 2.5rem);
          white-space: nowrap;
          overflow: hidden;
        }

        button{
          background-color: transparent;
          border:0;
          color: ${props => props.theme['gray-300']};

          &:hover {
            color: ${props => props.theme['red-300']};
          }
        }
      }


      p{
        padding: 0.7rem;
        word-wrap: break-word;
        max-width: max-content;
        overflow: scroll;
        text-align: left;

      }
    }
  }

  @media screen and (max-width: 768px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 480px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export const AddNoteButton = styled.button`
  border-radius: 8px;
  border: 0;
  color: ${props => props.theme['blue-200']};
  background-color: ${props => props.theme['white']};
  box-shadow: 0px 0px 3px ${props => props.theme['gray-400']};


  &&:hover{
    background-color: ${props => props.theme['gray-100']};
  color: ${props => props.theme['blue-500']};

  }
` 

export const FooterContainer = styled.footer`
  background-color: rgba(232, 241, 242,0.9);
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding: 01rem;

  div {
    display: flex;
    align-items: center;
    
    button {
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background-color: ${props => props.theme['red-300']};
      color: ${props => props.theme['white']};
      border: 0;
      border-radius: 6px;
      font-weight: bold;
      margin-right: 1rem;
      gap: 0.5rem;
    }
  }
`

export const NotLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 70vh;

  h1{
    color: ${props => props.theme['red-300']};

  }

  a {
    color: ${props => props.theme['white']}; 
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: ${props => props.theme['blue-500']};
    padding: 0.5rem ;
    border-radius: 8px;
  }

  a:link {
    color: ${props => props.theme['gray-500']};    
  }

  a:hover {
    color: ${props => props.theme['gray-300']};
    
  }
` 

export const InvisibleComponents = styled.div`

`
export const ContainerToOpenModalButton =styled.div`
  background-color: transparent;
`

export const OpenModalButton = styled.button`
  border:0;
  height: 100%;
  background-color: transparent;
  height: calc(100% - 4rem);

  display:flex;


  p{
    padding: 0.7rem;
    word-wrap: break-word;
    max-width: max-content;
    overflow: scroll;
    text-align: left;
    height: 100%;
  }

  &&:focus{
    box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
  }
`

export const EditModalContainer = styled.div`
  background-color: rgba(5,5,5, 0.8);
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  /* align-items:center; */

  div{
    background-color: ${props => props.theme['white']};
    width: 40vw;
    min-width: 25rem;
    height:80vh;
    border-radius: 6px;
    

    input{
      width: 100%;
      height:4rem;
      background-color: ${props => props.theme['blue-500']};
      color: ${props => props.theme['white']};
      font-size: 2rem;
      font-weight: bold;
      border-radius: 6px 6px 0px 0px;
      border: 0;
      padding: 1rem;
    }
    textarea{
      width: 100%;
      resize: none;
      height: calc(100% - 5rem);
      border: 0;
      padding: 1rem;

    }
    textarea:focus, input:focus, select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    } 

    footer{
      height: 5rem;
      display: flex;
      justify-content: end;
      align-items: center;
      gap:0.5rem;
      padding: 1rem;

      .discartChangesButton {
        background-color: ${props => props.theme['red-300']};
        color: ${props => props.theme['white']};
        padding:0.5rem;
        border: 0;
        border-radius: 6px;
        font-weight: bold;
      }
      .saveChangesButton{ 
        background-color: ${props => props.theme['green-300']};
        color: ${props => props.theme['white']};
        padding: 0.5rem;
        border: 0;
        border-radius: 6px;
        font-weight: bold;
      }
    }
  }
`
