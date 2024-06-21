import { Outlet } from "react-router-dom";
import AppNav from "../ui/AppNav";

function AppLayout() {
  return (
    <div>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
