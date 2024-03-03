import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero/Hero";
import Company from "./components/company/Company";
import Feature from "./components/feature/Feature";
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
              <Feature />
            </div>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
