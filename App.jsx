import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteArray from "./NoteArray";
import CreateArea from "./CreateArea";


function App(){
   /*array which the data 'll be saved */
const[notes, setNotes]=useState([]);

function addNote(newnote){
    setNotes(prevNotes => {
        return [...prevNotes, newnote] 
        
    })
}

function deleteNote(id){
setNotes(prevNotes =>{
    return prevNotes.filter((noteItem, index) => {
        return index !==id;
    });
});
}


    return (
    <div>
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        {/* index helps for deleting... tracks the numbers*/}
        {notes.map((noteitem, index) => {
           return (
            <Note 
            key={index}
            id={index}
           title={noteitem.title}
           content={noteitem.content} 
           onDelete={deleteNote}
           />
           );
        })}
        {/* instead of <Note /> better to create new component called notearray save the datas in it the pass the component */}
        {NoteArray.map ((x) => {
  return (
   <Note 
    key={x.id}
    title={x.title}
    content={x.content}
    />

);})
        }
   
        {/*<Note 
            title="This the title"
            content="This is the content"
        />
        <Note 
            title="menals page"
            content="menals title"
        />
        <Note 
            title="the ghig ndhsj "
            content="Note that the development build is not optimized.To create a production build, use"

        />*/}
        
          <Footer />
    </div>
    );
}

export default App;