import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Header from "./components/header/Header";
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
              <Header />
            </div>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
