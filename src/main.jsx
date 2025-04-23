import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set body background color immediately
document.body.style.backgroundColor = '#1f2937';
document.documentElement.style.backgroundColor = '#1f2937';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
