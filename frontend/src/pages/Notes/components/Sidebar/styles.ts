import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* background-color: red; */
  /* border-top-left-radius: 8px;
  border-bottom-left-radius: 8px; */
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${props => props.theme['gray-300']};

  .sidebar-header{
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme['gray-100']};

    h2 {
      color: ${props => props.theme['blue-500']}
    }

    div{
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      .save-note-button{
        border: 0;
        display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: ${props => props.theme['blue-500']};
        color: ${props => props.theme['white']};

        &:hover {
          background-color: ${props => props.theme['blue-600']};
        };

      };

      .notUpload{
        border: 0;
        display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: ${props => props.theme['red-500']};
        color: ${props => props.theme['white']};

        &:hover {
          background-color: ${props => props.theme['blue-600']};
        };

      };

      .add-note-button{
        border: 0;
        display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: limegreen;
        color: ${props => props.theme['white']};

        &:hover {
          background-color: ${props => props.theme['green-700']};
        }
      }
    }


    button {
 
    }
  }

  .sidebar-notes {
    flex-grow: 1;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin-bottom: 30px;
    
    .note{  
      border-bottom: 1px solid ${props => props.theme['gray-300']};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      overflow-y: scroll;

    }

    .active{
      background-color: ${props => props.theme['blue-500']};
      color: ${props => props.theme['white']}
    }
  }

  .sidebar-footer{    
    background-color: ${props => props.theme['gray-100']};
    padding: 1rem;
    position: relative;
    bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    button {
      padding: 0.5rem;
      border: 0;
      border-radius: 4px;
      color: ${props => props.theme['white']};
      font-weight: bold;
      background-color: ${props => props.theme['red-300']};
    }
  }
`
