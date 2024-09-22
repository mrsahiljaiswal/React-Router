import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider , } from "react-router-dom"
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import User from "./Components/User"
import Github , { fetchGitData } from "./Components/Github"
import ErrorPage from './Components/ErrorPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user' element={<User />}>
        <Route path=':userId' element={<User/>}/>
      </Route>
      <Route loader={fetchGitData} path='github' element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
