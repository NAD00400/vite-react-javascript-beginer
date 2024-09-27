import { useState } from "react";

const TodoNew=(props)=>{
    const {addNewTodo} =props ;
    // addNewToDo('duy')

    // const valueInput ="";
    const [valueInput,setValueInput]= useState('work')
    const handleClick = ()=>{
        addNewTodo(valueInput)
        setValueInput('')
    }
   
    const handleOnChange=(name)=>{
        // console.log("handle on change",name );
        setValueInput(name)
    }
   return (   
        <div className='todo-new'>
            <input type="text"
                onChange ={(event)=>{handleOnChange(event.target.value)}}
                value={valueInput}
            />
            <button
                onClick={handleClick}
            >Add</button>
            {/* <div>my text input: {valueInput}</div> */}
        </div>
   )
}
export { TodoNew };
 