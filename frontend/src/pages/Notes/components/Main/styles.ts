import styled from "styled-components";

export const MainContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;

  .title-container-input{
    height: 4rem;
    font-size: 3rem;
    border: 1px solid ${props => props.theme['gray-100']};
    padding:1rem;
  }

  .note-container-textarea{
    padding: 1rem;
    font-size: 1.2rem;
    height: 100%;
    margin-bottom: 2rem;
    resize: none;
    border: 1px solid ${props => props.theme['gray-100']};
  }
`