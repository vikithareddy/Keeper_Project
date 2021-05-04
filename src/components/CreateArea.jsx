import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

  //constants to toggle to input zoom area
  const [isExpanded, setExpanded] = useState(false);

  //create constants to store title and content
  const [note, setNote] = useState( {
    title: "", 
    content: ""
  }); 


//function to handle when changes are made to a note 
function handleChange(event) {
  //use destructuring to get name and value
  const {name, value} = event.target;

  //add to note by calling setNote()
  setNote(prevNote => {
    return {
      //add all previous notes
      ...prevNote,
      [name]: value
    }
  })
}

//function to handle "add" button click 
function submitNote(event) {
  props.onAdd(note);

  //to clear the contents of the note after it's been added
  setNote({
    title: "", 
    content: ""
  });

  //make sure the page is not refreshed every time a note is added
  event.preventDefault();
}

function expand() {
  setExpanded(true);
}


  return (
    <div>
      <form className="create-note">
        {isExpanded ? 
        <input name="title" placeholder="Title" value = {note.title} onChange = {handleChange}/> 
        : null}
        <textarea 
        onClick = {expand}
        name="content" onChange = {handleChange}
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1} 
        value = {note.content}/>
        <Zoom in = {isExpanded}>
        <Fab onClick = {submitNote}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
