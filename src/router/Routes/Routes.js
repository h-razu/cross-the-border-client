import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import RequireAuth from "../PrivateRoute/RequireAuth";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "reviews",
        element: (
          <RequireAuth>
            <MyReviews></MyReviews>
          </RequireAuth>
        ),
      },
      {
        path: "addService",
        element: (
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        ),
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://cross-the-border-server.vercel.app/serviceDetails/${params.id}`
          ),
      },
    ],
  },
]);
