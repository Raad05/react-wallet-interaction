import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Dynamic/Home";
import CommunityForm from "../Components/Dynamic/CommunityForm";
import Communities from "../Components/Dynamic/Communities";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-community",
        element: <CommunityForm></CommunityForm>,
      },
      {
        path: "/view-communities",
        element: <Communities></Communities>,
      },
    ],
  },
]);
