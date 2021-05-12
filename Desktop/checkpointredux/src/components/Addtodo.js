import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../js/action/actiontodo";

const Addtodo=()=>{
    const [input , setInput]=useState("");
    const dispatch  = useDispatch()
    const add =()=>{
        dispatch (addtodo({id:Date.now(),text:input ,editable:false}))
       
    }
    return(
        <div>
            <input type= "text"
            value ={input}
            onChange={e=>setInput(e.target.value)}
            />
            <button onClick= {add}> Add</button>
        </div>

    )

} 
export default Addtodo ;