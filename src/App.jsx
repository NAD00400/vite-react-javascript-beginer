import { Outlet } from 'react-router-dom'
import { Footer } from './Components/layout/footer'
import { Header } from './Components/layout/header'
const App =()=> {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default App
