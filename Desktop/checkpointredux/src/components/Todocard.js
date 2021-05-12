import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletetodo, edittodo ,edite,completeTodo} from "../js/action/actiontodo";


const Todocard =({todo})=>{
  const complete = () => {
    dispatch(completeTodo(todo.id));
  };
    const dispatch =useDispatch()
    const [textedited, setTextedited] =useState(todo.text)
    const editing =()=>{
        dispatch (edittodo(todo.id))
      
    }
    return (  
        <div>
         {todo.editable ? (
        <>
          <input
            type="text"
            value={textedited}
            onChange={(e) => setTextedited(e.target.value)}
          />
          <button onClick={edite}>save</button>
          <button onClick={editing}>cancel</button>
        </>
      ) : (
        <>
          {" "}
          <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {" "}
            {todo.text}{" "}
          </p>
          <button onClick={complete}>complete</button>
          <button onClick={editing}>edit</button>
        </>
      )}
          
        </div >
    
        )
}
export default Todocard;