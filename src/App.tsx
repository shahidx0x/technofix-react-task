import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero/Hero";
import Company from "./components/company/Company";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <div>
              <Hero />
              <Company />
            </div>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
