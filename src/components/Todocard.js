import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletetodo, edittodo ,edite} from "../js/action/actiontodo";


const Todocard =({todo})=>{
    const dispatch =useDispatch()
    const [textedited, setTextedited] =useState(todo.text)
    const editing =()=>{
        dispatch (edittodo(todo.id))
      
    }
    return (  
        <div>
            {
          todo.editable? (
              <>
              <input type = "text" value ={textedited}  onChange={e=>setTextedited(e.target.value)}/>
              <button onClick = { ()=>dispatch(edite (todo.id,))}> save</button>
              <button onClick ={editing}> cancel </button>
              </>

          ):(
              <>
            <p>{todo.text}</p>
            <button onClick= {editing}>edit </button>
            <button onClick={()=>dispatch(deletetodo(todo.id,textedited) )} >delete </button>
            </>
          )
          }
       
        </div >
    
        )
}
export default Todocard;