import React, { useState } from "react";


function CreateArea(props){


/*the written data to be saved we have to create */
const[note, setNote]=useState({
    title:"",
    content:""
})

function handleChange(event){
 const {name, value}= event.target;

  setNote(prevNote => {
   return {
    ...prevNote,
    [name]: value
   };
  })
}

function submitNote(event){
    props.onAdd(note);
    setNote({
        title:"",
        content:""  
    });
    event.preventDefault();
}
    return(
        <div className="component">
            <form>
                <input className="note" name="title" onChange={handleChange} value={note.title}placeholder="Title"/>
                <textarea className="note" name="content" onChange={handleChange} value={note.content}placeholder="Take a note..." rows="3"/>
                <button className="btn"onClick={submitNote} >Add</button>
            </form>
        </div>
    )
}

export default CreateArea;