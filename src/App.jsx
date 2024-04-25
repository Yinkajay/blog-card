import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Learning

      Published 21 Dec 2023

      HTML & CSS foundations

      These languages are the backbone of every website, defining structure, content, and presentation.

      Greg Hooper

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
