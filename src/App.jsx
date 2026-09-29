import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import AppLayout from "./ui/AppLayout";
import LearnOurStory from "./pages/LearnOurStory/LearnOurStory";
import CraftsmanShip from "./pages/CraftsmanShip/CraftsmanShip";
import Sustainability from "./pages/Sustainability/Sustainability";
import FAQ from "./pages/FAQ/FAQ";
import ShippingReturns from "./pages/Shipping & returns/Shipping&Returns";
import CareInstructions from "./pages/Care Instructions/CareInstructions";
import ContactUs from "./pages/Contact Us/ContactUs";
import Warranty from "./pages/Warranty/Warranty";
import Collection from "./pages/Collection/Collection";
import Product from "./pages/Product/Product";
import Error from "./ui/Error/Error";
import Profile from "./pages/Profile/Profile";
import { profileLoader } from "./utils/ProfileLoader";
import { action as createAccountAction } from "./utils/ProfileAction";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/learn-our-story",
        element: <LearnOurStory />,
      },
      {
        path: "/craftsman-ship",
        element: <CraftsmanShip />,
      },
      {
        path: "/sustainability",
        element: <Sustainability />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/shipping-&-returns",
        element: <ShippingReturns />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/care-instructions",
        element: <CareInstructions />,
      },
      {
        path: "/warranty",
        element: <Warranty />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: profileLoader,
        action: createAccountAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
