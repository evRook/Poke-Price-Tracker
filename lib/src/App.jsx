import logo from './logo.svg';
import './App.css';
import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider 
  } from 'react-router-dom'
import { Home, Layout, Sets } from './Pages'
import { homeLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} loader={homeLoader}/>
        <Route path='sets' element={<Sets />}></Route>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

