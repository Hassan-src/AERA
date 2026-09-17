import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import AppLayout from "./ui/AppLayout";
import LearnOurStory from "./pages/LearnOurStory/LearnOurStory";
import CraftsmanShip from "./pages/CraftsmanShip/CraftsmanShip";
import Sustainability from "./pages/Sustainability/Sustainability";
import FAQ from "./pages/FAQ/FAQ";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/LearnOurStory",
        element: <LearnOurStory />,
      },
      {
        path: "/CraftsmanShip",
        element: <CraftsmanShip />,
      },
      {
        path: "/Sustainability",
        element: <Sustainability />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
