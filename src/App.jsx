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
  const addNewToDo =(name,)=>{
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
       addNewToDo={addNewToDo}//   truyền 1 hàm 
      />
      <TodoData
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
