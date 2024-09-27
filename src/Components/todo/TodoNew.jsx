const TodoNew=(props)=>{
    const {addNewToDo} =props ;
    // addNewToDo('duy')
    const handleClick = ()=>{
        alert('click me')
    }
    const handleOnChange=(name)=>{
        console.log("handle on change",name );
        
    }
   return (   
        <div className='todo-new'>
            <input type="text"
                onChange ={(event)=>{handleOnChange(event.target.value)}}
            />
            <button
                onClick={handleClick}
            >Add</button>
        </div>
   )
}
export { TodoNew };
 