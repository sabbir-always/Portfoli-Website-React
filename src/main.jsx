import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CommonContext from './context/CommonContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CommonContext>
        <App />
      </CommonContext>
    </BrowserRouter>
  </StrictMode>,
)
