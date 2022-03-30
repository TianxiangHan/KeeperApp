import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  
  const [noteTitle,setNoteTitle]=React.useState("");
  const [noteContent,setNoteContent]=React.useState("");
  const [items,setItems]=React.useState([{itemTitle:"",itemConcent:""}]);
  

  function SetItemTitleInApp(title){
    setNoteTitle(title); 
    setItems([{itemTitle:title,itemConcent:""}]);
  }
  function SetItemContentInApp(content){
    setNoteContent(content);
  }

  
  
  return (
    <div>
      <Header />
      <CreateArea  onChangeContent={SetItemContentInApp} onChangeTitle={SetItemTitleInApp} />
      <Note key={1}  title={} content={} />
      <Footer />
    </div>
  );
}

export default App;
