const TodoNew=(props)=>{
    const {addNewToDo} =props ;
    // addNewToDo('duy')
   return (   
        <div className='todo-new'>
            <input type="text"/>
            <button>Add</button>
        </div>
   )
}
export {TodoNew}