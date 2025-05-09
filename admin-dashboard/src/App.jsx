import { Route , Router , Routes } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import Profile from "./page/Profile"
import About from "./page/About"
import Contact from "./page/Contact"
import Setting from "./page/Setting"
import Login from "./page/Login"
import Cart from "./page/Cart"
import Footer from "./components/Footer"

function App() {

  const [cartCount , setCartCount] = useState('');

  const [firstname , setFirstName] = useState('');
  const [lastname , setLastName] = useState('');
  const [phone , setPhone] = useState('');
  const [email , setEmail] = useState('');

  const [username , setUsername] = useState('');
  const [userpassword , setUserpassword] = useState('');

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
          element={ <Contact
          firstname={firstname} setFirstName={setFirstName}
          lastname={lastname} setLastName={setLastName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
             /> } 
          />

        <Route
          path="/setting"
          element={ <Setting /> } 
          />

        <Route
          path="/login"
          element={ <Login 
          username={username} setUsername={setUsername}
          useremail={userpassword} setUseremail={setUserpassword}
            /> } 
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

export default App;
