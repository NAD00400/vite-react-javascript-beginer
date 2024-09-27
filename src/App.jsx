import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Components/todo/todo.css'
import { TodoData } from './Components/todo/TodoData'
import { TodoNew } from './Components/todo/TodoNew'
const App =()=> {

  const [todoList, setTodoList]=useState([
    // { id :1 , name : 'Code' },
    // { id :2 , name : 'Gym' }
  ])

  const addNewTodo =(name)=>{
    const newTodo={
      id :randomIntFromInterval(1 ,100),
      name :name 
    }
    setTodoList([... todoList, newTodo])
  }

  const randomIntFromInterval = (min, max)=> { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
       addNewTodo={addNewTodo}
      />
      {todoList.length >0 ?
        <TodoData todoList ={todoList}/>
      :
        < div className='todo-image'>
          <img src={reactLogo} alt="React Logo" className='logo'/>
        </div>
      }     
    </div>
  )
}
export default App
