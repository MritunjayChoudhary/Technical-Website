import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import {Service} from "./pages/service";
import {Navbar} from "./components/Navbar";
import {Error} from "./pages/error";
import {Footer} from "./components/Footer/Footer";
import {Logout} from "./pages/Logout";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/service" element = {<Service/>}/>
          <Route path="/logout" element = {<Logout/>}/>
          <Route path="*" element = {<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
