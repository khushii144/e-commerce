import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <RouterProvider router={router} />
        <main>
          <ToastContainer position="top-right" autoclose={2000}/>
        </main>
    </>
  )
}

export default App
