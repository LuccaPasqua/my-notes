import axios from "axios";
import { AddNoteButton, ContainerToOpenModalButton, EditModalContainer, FooterContainer, NotLoggedContainer, NotesGridContainer, NotesPageContainer, OpenModalButton } from "./styles";
import { useEffect, useState } from "react";
import { Plus, SignOut, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface Note {
  title: string;
  content: string;
  _id:string;
}

type NoteObject = Note[]

export function Notes() {
  const [notesObject, setNotesObject] = useState<NoteObject>([]);
  const [errorMessageContainer, setErrorMessageContainer] = useState('');
  const [ userName, setUserName ] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [isEditModalOpen, setIsEditModalOpen] = useState('')

  const [ currentNoteOpenTitle, setCurrentNoteOpenTitle] = useState('')
  const [ currentNoteOpenContent, setCurrentNoteOpenContent] = useState('')

  function logOut(){
    localStorage.removeItem("jwtToken")
    window.location.reload()
  }

  function deleteNote(idOfNote:string){
    setIsEditModalOpen('');
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    axios.delete(`http://localhost:3333/api/v1/note/${idOfNote}`, config)
      .then(response => {
        // Lidar com a resposta do backend, se necessário
        console.log('Note deleted successfully:', response.data);
        // Remover a nota localmente
        const updatedNotes = notesObject.filter(note => note._id !== idOfNote);
        setNotesObject(updatedNotes);
      })
      .catch(error => {
        // Lidar com erros da requisição
        console.error('Error deleting note:', error);
        // Você pode definir um estado de erro aqui para exibir uma mensagem ao usuário, se necessário
      });
  }

  function saveChanges(){
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
  
    const updatedNote = {
      title: currentNoteOpenTitle,
      content: currentNoteOpenContent
    };
  
    axios.patch(`http://localhost:3333/api/v1/note/${isEditModalOpen}`, updatedNote, config)
      .then(response => {
        // Lidar com a resposta do backend, se necessário
        console.log('Note updated successfully:', response.data);
        setIsEditModalOpen(''); // Fechar o modal de edição após salvar as alterações

        const updatedNotes = notesObject.map(note => {
          if (note._id === isEditModalOpen) {
            return {
              ...note,
              title: currentNoteOpenTitle,
              content: currentNoteOpenContent
            };
          } else {
            return note;
          }
        });
        setNotesObject(updatedNotes);
      })
      .catch(error => {
        // Lidar com erros da requisição
        console.error('Error updating note:', error);
        // Você pode definir um estado de erro aqui para exibir uma mensagem ao usuário, se necessário
      });
  }

  function openEditModal(idOfNote:string){
    console.log("Opening modal for note with id:", idOfNote);
    setIsEditModalOpen(idOfNote)
    const objeto = notesObject.find(note => note._id === idOfNote);

    if(objeto){
      console.log(objeto)

      setCurrentNoteOpenTitle(objeto.title)
      setCurrentNoteOpenContent(objeto.content)
    } else {
      setIsEditModalOpen('')
    }

  }

  function createNote() {
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
  
    const newNote = {
      title: "New Note",
      content: ""
    };
  
    axios.post('http://localhost:3333/api/v1/note', newNote, config)
      .then(response => {
        // Lidar com a resposta do backend, se necessário
        console.log('New note created successfully:', response.data);
        // Adicionar a nova nota localmente
        setNotesObject([...notesObject, response.data.note]);
        // Abrir o modal de edição com a nova nota
        const noteIdToEdit = response.data.note._id
        openEditModal(noteIdToEdit);
        setIsEditModalOpen(noteIdToEdit);
      })
      .catch(error => {
        // Lidar com erros da requisição
        console.error('Error creating new note:', error);
        // Você pode definir um estado de erro aqui para exibir uma mensagem ao usuário, se necessário
      });
  }


  useEffect(() => {
    async function getAllUserNotes() {
      try{
        const token = localStorage.getItem("jwtToken");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          },
        };

        const response = await axios.get('http://localhost:3333/api/v1/note', config)
        
        console.log(response.data)
        setUserName(response.data.name)
        setNotesObject(response.data.notes)
      } catch(err) {
        // console.error('Erro ao obter notas do usuário:', err);
        setErrorMessageContainer('Erro ao obter notas do usuário.');
      }
    }   

    async function isWindowLoading() {
      window.addEventListener("load", () => {
        setIsLoading(false);
      });
  
      // Remove o listener do evento quando o componente é desmontado
      return () => {
        window.removeEventListener("load", () => {});
      };
    }

    isWindowLoading()
    getAllUserNotes()
  }, [])

  useEffect(() => {
    if (isEditModalOpen !== '') {
      const objeto = notesObject.find(note => note._id === isEditModalOpen);
  
      if (objeto) {
        setCurrentNoteOpenTitle(objeto.title);
        setCurrentNoteOpenContent(objeto.content);
      } else {
        setIsEditModalOpen('');
      }
    }
  }, [isEditModalOpen]);

  if(userName !== ''){
    return(
      <NotesPageContainer>
        <div>
          <h1><span className="my">My</span><span>.</span><span className="notes">Notes</span></h1>
          <NotesGridContainer>
            <div>
              <AddNoteButton onClick={createNote}>
                <Plus size={100}/>
              </AddNoteButton>
              {notesObject.map((note:any, index: number) => (
                  <div key={index}>
                    <div>
                      <h2>{note.title}</h2>
                      <button onClick={() => { deleteNote(note._id) }}><Trash size={24} /></button>
                    </div>
                    <OpenModalButton key={index} onClick={() => {openEditModal(note._id)}}>
                      <p>{note.content}</p>   
                    </OpenModalButton>    
                  </div>
                

              ))}
            </div>

          </NotesGridContainer>

          <FooterContainer>
            <div>
              <button onClick={logOut}>Log-out <SignOut size={16} weight="bold"/></button>
              <span>{userName}</span>
            </div>
          </FooterContainer>
        </div>

        {isEditModalOpen ? 
          <EditModalContainer>
            <div>
              <input 
                type="text" 
                maxLength={60} 
                value={currentNoteOpenTitle} 
                onChange={(e)=> {setCurrentNoteOpenTitle(e.target.value)}}
              />
              <div>
                <textarea 
                  value={currentNoteOpenContent}
                  onChange={(e)=> {setCurrentNoteOpenContent(e.target.value)}}
                >

                </textarea>
                <footer>
                  <button className="discartChangesButton" onClick={() => {setIsEditModalOpen('')}}>Discart Changes</button>
                  <button className="saveChangesButton" onClick={saveChanges}>Save Changes</button>
                </footer>
              </div>
              

            </div>
          </EditModalContainer>
          :
          <p></p>
        }

      </NotesPageContainer>
    )
  } else {
    if(isLoading === false ) {
      return(
        <NotesPageContainer>
          <h1><span className="my">My</span><span>.</span><span className="notes">Notes</span></h1>
          <NotLoggedContainer>
            <h1>ERROR: Not logged in !</h1>
            <Link to="/Login">Login</Link>
          </NotLoggedContainer>
        </NotesPageContainer>
      )
    }
  }
  
}