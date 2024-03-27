import NavBar from "./Components/NavBar.jsx"
import Model from "./Components/Model.jsx"
import Hero from "./Components/Hero.jsx"
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx"
import { useState } from "react";
import About from "./Components/About.jsx";
function App() { 
 const[isSideBar,setIsSideBar]=useState(false);

return (
  <>
    <NavBar setIsSideBar={setIsSideBar}></NavBar>
    <Model isSideBar={isSideBar} setIsSideBar={setIsSideBar}></Model>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </>
)
}

export default App
