import React, {useState} from "react";
import Note from "./Note";

function CreateArea(props) {

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


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {note.title} onChange = {handleChange}/>
        <textarea 
        name="content" onChange = {handleChange}
        placeholder="Take a note..." 
        rows="3" 
        value = {note.content}/>
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
