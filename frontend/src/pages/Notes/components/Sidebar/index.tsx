import { Plus } from "@phosphor-icons/react"
import { SidebarContainer } from "./styles"
import dayjs from "dayjs";
import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr/CloudArrowUp";
import { useEffect } from "react";

// interface notesProps {
//   noteTitle: string;
//   noteValue: string;
//   id: string;
// }

interface SidebarProps {
  authUser: object;
  userSignOut: () => void;
  userNotes: [{
    noteTitle: string,
    noteValue: string,
    id: string,
    createdAt: string,
  }],
  selectedNoteNumber: number,
  useSelectNoteNumber: () => void,
  noteThatIsBeingEdit: {
    noteTitle:string;
    noteValue: string;
  },
  isTheNoteUpdateOnDatabase:boolean,
  uploadNoteToFirebase: () => void,
  useAddNewNote:() => void,
}

export function Sidebar({
  authUser, 
  userSignOut, 
  userNotes,
  selectedNoteNumber, 
  useSelectNoteNumber,
  noteThatIsBeingEdit,
  isTheNoteUpdateOnDatabase,
  uploadNoteToFirebase,
  useAddNewNote,
}: SidebarProps) {
  const userNotesOnSidebar = userNotes
  console.log(userNotesOnSidebar)
  
  const timeInHoursAndMinutes = (dateString: string) => {
    const hourFormat = dayjs(dateString).format('HH:mm')
    const dayFormat = dayjs(dateString).format('DD / MM')

    const dayToday = dayjs(new Date()).format('DD / MM')

    if(dayFormat === dayToday){
      return hourFormat
    } else {
      return dayFormat
    }

  }

  const onChangeSelectedDiv = (numberToChange:number) => {
    if(isTheNoteUpdateOnDatabase === true) {
      useSelectNoteNumber(numberToChange)    
    } else {
      alert('Save the file before going to other one!')
    }
  }

  const handleCLickUploadToFirebase = () => {
    uploadNoteToFirebase()
  }

  const handleAddNewNote = () =>{
    useAddNewNote()
  }

  return (
    <SidebarContainer>
      <div
        className="sidebar-header"
      >
        <h2>Notes</h2> 
        <div>
          {isTheNoteUpdateOnDatabase ? (
            <button className="save-note-button"><CloudArrowUp size={24}/></button>
          ) : (
            <button className="notUpload" onClick={handleCLickUploadToFirebase}><CloudArrowUp size={24}/></button>
          )}
          
          <button className="add-note-button" onClick={handleAddNewNote}><Plus size={24} fontWeight={'bold'}/></button>
        </div>

      </div>

      <div 
        className='sidebar-notes'
      >
        {userNotesOnSidebar.map((note, index) =>{
          return(
            <div className={`note ${index ===selectedNoteNumber ? 'active' : ''}`} key={note.id} onClick={() => {onChangeSelectedDiv(index)}}>
              {index ===selectedNoteNumber ? (
                <div>
                  <h3>{noteThatIsBeingEdit.noteTitle}</h3>
                  <p>previa da nota</p>
                </div>
              ) : (
                <div>
                  <h3>{note.noteTitle}</h3>
                  <p>previa da nota</p>
                </div>
              )}
              <span>{timeInHoursAndMinutes(note.createdAt)}</span>
            </div>
          )

        })}

      </div>

      <div
        className="sidebar-footer"
      >
        <p>{authUser.email}</p>
        <button onClick={userSignOut}>Log out</button>
      </div>
    </SidebarContainer>
  )
}