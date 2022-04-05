import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter} from "react-router-dom"; 
import { Footer } from './components/footer';
import Navbar from './components/Navbar';
import './index.css';
import { Contact } from './views/Contact';
import { Home } from './views/Home';

function App() {
    return <BrowserRouter >
    <Navbar />
    <Routes >
      <Route exact path="/" element = {<Home />}>
      </Route>
      <Route exact path="/Contact" element = {<Contact />}>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
}

export default App
