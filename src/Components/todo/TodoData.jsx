
const TodoData =(props)=>{ 
    const {todoList,deleteTodo}= props;
    

    const handleClick= (id) =>{   
        deleteTodo(id);
    }
    console.log('>>> check todo list :',todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index)=>{
                console.log("check map", item ,index);
                return(
                      
                    <div className="todo-item">
                    <div>{item.name}</div>
                    <button 
                    onClick = {()=> {handleClick(item.id)}}
                    >Delete</button>
                </div>);
            })}            
        </div>
    )
}
export { TodoData };
