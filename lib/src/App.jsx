import logo from './logo.svg';
import './App.css';
import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider 
  } from 'react-router-dom'
import { Home, Layout, Sets } from './Pages'
import { rocketLoader, setsLoader } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} loader={rocketLoader}/>
        <Route path='sets' element={<Sets />} loader={setsLoader}>
          {/* <Route path=':setId' element={<Cards />} /> */}
        </Route>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

