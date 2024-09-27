import { useState } from "react";

const TodoNew=(props)=>{
    const {addNewTodo} =props ;
    // addNewToDo('duy')

    // const valueInput ="";
    const [valueInput,setValueInput]= useState('eric')
    const handleClick = ()=>{
        console.log(">>check value input: ",valueInput);
        
    }
    const handleOnChange=(name)=>{
        // console.log("handle on change",name );
        setValueInput(name)
        
    }
   return (   
        <div className='todo-new'>
            <input type="text"
                onChange ={(event)=>{handleOnChange(event.target.value)}}
            />
            <button
                onClick={handleClick}
            >Add</button>
            <div>my text input: {valueInput}</div>
        </div>
   )
}
export { TodoNew };
 