
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import About from "./pages/about";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/menu' exact element={<Menu />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/contact' exact element={<Contact />}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
