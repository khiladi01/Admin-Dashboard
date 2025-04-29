import { Route , Router , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      
        <Routes>
          <Route
          path="/"
          element={ <Navbar /> } 
          />
        </Routes>
      
    </>
  )
}

export default App
