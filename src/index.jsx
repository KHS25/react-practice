import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileCard from './chapter_13/ProfileCard.jsx'
import Blog from './chapter_16/Blog.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ProfileCard /> */}
    <Blog />
  </StrictMode>,
)