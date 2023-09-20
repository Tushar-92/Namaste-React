import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


//Importing the components here
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//Importing utils here
import UserContext from "./utils/UserContext";


const AppLayout = () => {

    const [userName, setUserName] = useState();

    //Authentication
    useEffect(() => {
      //Make an api call and send username and password and then we get below data in response
      const data = {
        name: "Tushar Singh",
      };

      setUserName(data.name);
    }, []);
  
  
  
  return (
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);






