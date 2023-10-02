import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import ContentPage from './components/ContentPage'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar />
  <WelcomePage />
  <ContentPage />
  <Footer />
    <App />
  </React.StrictMode>,
)
