import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js";

import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import BlogIntro from './components/BlogIntro';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/product-description" element={<ProductDescription/>} />
        <Route path="/blog-intro" element={<BlogIntro/>} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
