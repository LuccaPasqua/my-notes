import { useEffect, useState } from "react";
import { MainContainer } from "./styles";

interface MainProps {
  noteToAppearOnMain: {
    noteTitle: string,
    noteValue: string,
    id: string,
    createdAt: string,
  } | undefined ;
  noteThatIsBeingEdit: {
    noteTitle:string;
    noteValue: string;
  };
  useNoteThatIsBeingEdit: (editedNote: { noteTitle: string; noteValue: string }) => void;
}

export function Main({noteToAppearOnMain, noteThatIsBeingEdit, useNoteThatIsBeingEdit}: MainProps) {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteValue, setNoteValue] = useState('')

  useEffect(()=>{
    if(noteToAppearOnMain) {
      setNoteTitle(noteToAppearOnMain.noteTitle)
      setNoteValue(noteToAppearOnMain.noteValue)
    } else {
      setNoteTitle("");
      setNoteValue("");
    }

  }, [noteToAppearOnMain])

  const handleChangeTitleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newTitleValue = e.target.value
    const objToEdit = { ...noteThatIsBeingEdit, noteTitle: newTitleValue}
    // objToEdit.noteTitle = newTitleValue


    console.log(objToEdit)
    setNoteTitle(newTitleValue)
    useNoteThatIsBeingEdit(objToEdit)
  }

  const handleChangeTextInput = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextareaValue = e.target.value
    const objToEdit = {...noteThatIsBeingEdit, noteValue: newTextareaValue}

    setNoteValue(newTextareaValue)
    useNoteThatIsBeingEdit(objToEdit)
  }


  return(
    <MainContainer>
      <input 
        type="text" 
        value={noteTitle} 
        onChange={handleChangeTitleInput}
        className="title-container-input"
      />  
      <textarea 
        value={noteValue}
        onChange={handleChangeTextInput}
        className='note-container-textarea'
      />
    </ MainContainer>
    
  )
}