import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//bien namefunction =('tham so dau vao) =>{ lenh}
const MyComponent =()=>{
  //html + js + css
  return(
    <div> Nguyen anh duy - hoidanit</div>
  );
}


const App =()=> {
  const [count, setCount] = useState(0)
  // function myFunction (){
  //   console.log('hello world from html');
  // }
  const myFunction =()=>{
    console.log(' run my arrow function ');
  };
  myFunction();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <MyComponent/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
