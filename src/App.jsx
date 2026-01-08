
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {  Routes, Route,  } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Offres from "./pages/Offres";
import Contact from "./pages/contact";
import JobDetail from "./pages/JobDetail";
import Navbar from  "./components/Navbar";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  return (
    <>
      <Navbar/>
      <div className="main-content">
        {/* contenu/ sections/ routes*/}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offres' element={<Offres />} />
          <Route path='/offres/:id' element={<JobDetail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<div>Page introuvable</div>}/>
        </Routes>
      </div>
      <Footer />
    </>
    
  )
}

export default App
