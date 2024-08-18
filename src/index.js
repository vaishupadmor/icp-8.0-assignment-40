import {createRoot} from "react-dom/client";
 import ".//index.css"

import Home from "./../src/view/home/home/home"
import About from "./../src/view/about/about"
import Contact from "./../src/view/contact/contact/contact"
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root"));


const router =createBrowserRouter([{
    path:'/',
    element:<Home/>,
},
{
    path:'/about',
    element:<About/>,
},
{
    path:'/contact',
    element:<Contact/>,
}])

root.render(<RouterProvider router={router}/>)
//const currentpath = window.location.pathname;

//if (currentpath == "/"){
 //   root.render(<Home/>)
//}
//else if (currentpath == "/about")
//{
//    root.render(<About/>)
//}
//else if(currentpath == "/contact"){
  //  root.render(<Contact/>)
//}

//else{
  //  root.render(<h1> 404 NOT Found</h1>)
//} 
