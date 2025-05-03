import { Route , Router , Routes } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import Profile from "./page/About"
import About from "./page/About"
import Contact from "./page/About"
import Setting from "./page/About"
import Login from "./page/About"
import Cart from "./page/Cart"
import Footer from "./components/Footer"

function App() {

  const [cartCount , setCartCount] = useState('');

  return (
    <>
      <Navbar cartCount={cartCount} />
        <Routes>
          <Route
          path="/"
          element={ <Home setCartCount={setCartCount} /> } 
          />

          <Route
          path="/profile"
          element={ <Profile /> } 
          />

          <Route
          path="/about"
          element={ <About /> } 
          />

        <Route
          path="/contact"
          element={ <Contact /> } 
          />

        <Route
          path="/setting"
          element={ <Setting /> } 
          />

        <Route
          path="/login"
          element={ <Login /> } 
          />

        <Route
          path="/cart"
          element={ <Cart /> } 
          />
        </Routes>
        
        <Footer />
    </>
  )
}

export default App
