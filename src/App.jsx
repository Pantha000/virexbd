import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Protfolio from "./pages/portfolio/Protfolio"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Protfolio/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
