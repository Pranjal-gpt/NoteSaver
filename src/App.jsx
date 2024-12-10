
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
const router= createBrowserRouter(
  [
    {
      path:"/",
      element:
      <>
        <Navbar/>
        <Home/>
      </>
    },
    {
      path:"/pastes",
      element:
      <>
        <Navbar/>
        <Paste/>
      </>
    },
    {
      path:"/pastes/:id",
      element:
      <>
        <Navbar/>
        <ViewPaste/>
      </>
    },
  ]
);
function App() {
 

  return (
  
      <>
        <RouterProvider router={router}/>
      </>
      
  )
}

export default App
