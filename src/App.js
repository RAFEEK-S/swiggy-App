import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantCategory from "./components/RestaurantCategory";
import userContext from "./utils/userContext";

 //import React, { useContext } from "react";
 import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
   //const { logginUser} = useContext(userContext);
  const [userName, setUserName] = useState("");
  // console.log(userName);
  // useEffect(() => {

  //   const data = {
  //     name:"default",
  //   };
  //   // const data = [
  //   //   { name: 'RAFEEK', age: 30 },
  //   //   { name: 'arun', age: 15 }
  //   // ];

  //   const updatedData = logginUser.map((user) =>
  //     user.name === "RAFEEK" ? { ...user, name: "SALIK" } : user
  //   );

//      setUserName(data);
// },[]);

  return (
    <>
    <Provider store={appStore}>
      <userContext.Provider value={{logginUser:userName, setUserName }}>
        
        <Header />

        <Outlet />
      </userContext.Provider>
      </Provider>
    </>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/category/",
        element: <RestaurantCategory />,
      },
    ],
  },
]);
