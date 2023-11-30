import Menu from "./components/Body/Menu/Menu";
import Booking from "./components/Body/Booking/Booking";
import Status from "./components/Body/Status/Status";
import RootLayout from "./Layout/RootLayout";
import Activate from "./components/Authentication/Activate";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ResetPassword from "./components/Authentication/ResetPassword";
import ResetPasswordConfirm from "./components/Authentication/ResetPasswordConfirm";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from "./Layout/AuthLayout";
import { Provider } from 'react-redux';
import store from './store';

const routesConfig = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/password/reset/confirm/:uid/:token",
        element: <ResetPasswordConfirm />
      },
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/activate/:uid/:token",
        element: <Activate/>,
      },
      {
        path: "/reset_password",
        element: <ResetPassword/>,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu/booking",
        element: <Booking />,
      },
      {
        path: "/menu/status",
        element: <Status />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

function App(){
    return (
        <Provider store={store}> <RouterProvider router={router}/> </Provider>
    );
}

export default App;