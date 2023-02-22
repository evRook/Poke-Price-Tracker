
import './App.css';
import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider,
  } from 'react-router-dom'
import { Home, Layout, Sets, Cards } from './Pages'
import { rocketLoader, setsLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Poke-Price-Tracker' element={<Layout />}>
        <Route index element={<Home />} loader={rocketLoader}/>
        <Route path='sets' element={<Sets />} loader={setsLoader}> </Route>
        <Route path='sets/:setId' element={<Cards />} />
    </Route>
  )
)

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}

