import { Addtodo ,Deletetodo, Editable, Edittodo } from "../constants/actiontype"

export const addtodo=(newtodo)=>{
    return {
        type :Addtodo , a : newtodo
}
}
export const deletetodo=(index)=>{
    return {
        type :Deletetodo , payload:index

}
}
export const edittodo=(id)=>{
    return {
        type :Editable , payload:id

}
}
export const edite=(id ,editetodo)=>{
    return {
        type :Edittodo , a:id , b:editetodo

}
}




