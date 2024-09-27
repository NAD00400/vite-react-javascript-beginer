import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Components/todo/todo.css'
import { TodoData } from './Components/todo/TodoData'
import { TodoNew } from './Components/todo/TodoNew'
const App =()=> {

  const name="Eric Arsenal";
  const age=25;
  const data={
    address: 'ha noi',
    country:'viet nam'
    };
  
  const [todoList, setTodoList]=useState([
    { id :1 , name : 'Learning React' },
    { id :2 , name : 'nguyen anh duy' }
  ])

  const addNewTodo =(name)=>{
    const newTodo={
      id :randomIntFromInterval(1 ,100),
      name :name 
    }
    setTodoList([... todoList, newTodo])
  }

  const randomIntFromInterval = (min, max)=> { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
       addNewTodo={addNewTodo}//   truyền 1 hàm 
      />
      <TodoData
      todoList ={todoList}
        name={name}
        data={data}
        age={age}
       
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="React Logo" className='logo'/>
      </div>
    </div>
    
  )
}
export default App
