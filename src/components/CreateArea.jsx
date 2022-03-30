import React from "react";

function CreateArea(props) {
  const [title,setTitle]=React.useState("");
  const [content,setContent]=React.useState("");
  function saveTitle(event){
    setTitle(event.target.value);
  }
  function saveContent(event){
    setContent(event.target.value);
  }
  function ButtonClick(sendTitle,sendContent){
    props.onChangeContent(sendContent);props.onChangeTitle(sendTitle)
  }
  return (
    <div>
      <form>
        <input onChange={saveTitle} name="title" placeholder="Title" />
        <textarea onChange={saveContent} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={()=>{props.onChangeContent(content);props.onChangeTitle(title)}} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
