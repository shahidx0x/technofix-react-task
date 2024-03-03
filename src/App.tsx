import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Page from "./Page";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Page />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
