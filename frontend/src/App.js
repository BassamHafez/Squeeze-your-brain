import './App.css';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const router=createBrowserRouter([{
  path:"/",
  element:<Root/>,
  children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
  ]
}])  

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
