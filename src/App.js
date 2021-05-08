import React from "react"
import { useSelector } from "react-redux";
import './App.css';
import Todocard from "./components/Todocard";
import Addtodo from "./components/Addtodo"



function App() {
  const todolist =useSelector(state=>state.todos)

  return (
    <div className="App">
      <Addtodo/>
     {
       todolist.map (todo=> <Todocard key ={todo.id} todo={todo} />)
     }

    </div>
  );
};

export default App;
