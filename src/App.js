import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Login from "./components/Login";

const AppLayout = () =>{
    return(
     <Provider store={store}>
       <Header/>
       <Outlet/>
       <Footer/>
     </Provider>
    );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }
      ,{
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      }
      ,{
        path:"/contact",
        element:<Contact/>
      }
      ,{
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
      ,{
        path:"/cart",
        element:<Cart/>
      }
      ,{
        path:"/login",
        element:<Login/>
      }
    ]
  }
]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);