import { ChangeEvent, useState } from "react";

type Props = {
	onAdd: (title:string , body:string )=> void;
}

export const PostForm = ({onAdd}:Props)=>{

	const [titleText,setTitleText] = useState("");
  	const [bodyText,setBodyText] = useState("");

  	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setTitleText(e.target.value);
  	}

  	const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setBodyText(e.target.value);
	}

	const handleClick = ()=>{
		if(titleText && bodyText){
			onAdd(titleText , bodyText);
		}else {
			alert("Prencha Todos os Campos!");
		}
	}



	return (
		<fieldset className='border-2 mb-4 p-4'>
          
          <legend>Adicionar Povo Post</legend>

          <input 
          value={titleText}
          className="border block mb-4"
          type="text"
          placeholder='Digite um titulo'
          onChange={handleTitleChange}
          />

          <textarea
          onChange={handleBodyChange} 
          value={bodyText}
          className="border block mb-4"  
          ></textarea>

          <button onClick={handleClick}>Adicionar</button>

        </fieldset>
	);
}