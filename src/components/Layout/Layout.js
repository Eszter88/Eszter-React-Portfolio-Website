import "./Layout.scss";
import Navbar from "../Navbar/Navbar.js";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Layout = () => {
  const { state } = useNavigation();

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "var(--bg-dark)" : "var(--bg-light)",
  };

  return (
    <div className="App" style={themeStyles}>
      <Navbar />
      {state === "loading" ? (
        <div className="loader">
          <p>Loading...</p>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
