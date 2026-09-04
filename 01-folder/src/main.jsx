import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
//createRoot() connects React to the HTML root element, and 
// .render(<App />) displays your React app there.