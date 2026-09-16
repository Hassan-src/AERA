import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import AppLayout from "./ui/AppLayout";
import LearnOurStory from "./pages/LearnOurStory/LearnOurStory";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
