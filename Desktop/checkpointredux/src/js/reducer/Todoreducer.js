import { Addtodo, Deletetodo, Editable, Edittodo,COMPLETE_TODO } from "../constants/actiontype"

const initstate ={
    todos:[{
        id:0 , text : " Todo 1 " ,editable:false ,   isCompleted: false,
    },
    {
        id:1 , text : " Todo 2", editable:false ,   isCompleted: false,
    }
  ]
    
}
export const Todoreducer =(state=initstate,action)=>{
    switch(action.type){
        case Addtodo : return {
            ...state,todos:[...state.todos,action.a] 
        }
        case Deletetodo : return {
            ...state,todos:state.todos.filter(todo=>todo.id!==action.payload)
        }
        case Editable :return {
            ...state, todos:state.todos.map(todo=>todo.id===action.payload? {...todo,editable: !todo.editable} :todo)
        }
         case Edittodo : return {
             ...state ,todos :state .todos.map (todo=>todo.id===action.a? {...todo,text:action.b, editable:false} : todo)
         }
         
         case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      };
             
        default : return state 
    }

}