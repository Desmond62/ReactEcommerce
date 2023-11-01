import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Includes/Navbar.jsx';
import Footer from './Components/Includes/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
