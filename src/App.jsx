import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import for Bootstrap's JS functionality
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/skills' element={<Skills />} ></Route>
          <Route path='/projects' element={<Projects />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
