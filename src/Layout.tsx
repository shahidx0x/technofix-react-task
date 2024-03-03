import { Outlet } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";

export default function Layout() {
  return (
    <>
      <div>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}
