import { Route , Router , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
// import Profile from "./page/About"
import About from "./page/About"
import { Divide } from "lucide-react"
// import Contact from "./page/About"
// import Setting from "./page/About"
// import Login from "./page/About"

function App() {

  return (
    <>
    
      <Navbar />
        <Routes>
          <Route
          path="/"
          element={ <Home /> } 
          />

          <Route
          path="/about"
          element={ <About /> } 
          />
        </Routes>
        
    </>
  )
}

export default App
