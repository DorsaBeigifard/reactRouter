import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Layout() {
  return (
    <div>
      <AppNav />
      {/* Dynamic content */}
      <Outlet />
      {/* Dynamic content */}

      <footer style={{ marginTop: "5rem " }}>This is footer</footer>
    </div>
  );
}

export default Layout;

// Outlet is like children
