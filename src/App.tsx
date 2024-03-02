import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div>hellos</div>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
