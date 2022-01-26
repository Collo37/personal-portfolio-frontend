import NavbarLogic from "../../hooks/Navbar";
import Routing from "../../hooks/Routing";

import "./NavbarStyles.css";

const Navbar = () => {
  const { toggleSidebar } = NavbarLogic();
  const { visitPage } = Routing();
  return (
    <div className="navbar-container">
      <div className="logo" onClick={() => visitPage("")}>
        <h3>Collins.</h3>
      </div>
      <div className={`menu`} onClick={() => toggleSidebar()}>
        <span className="menu-1"></span>
        <span className="menu-2"></span>
        <span className="menu-3"></span>
      </div>
    </div>
  );
};

export default Navbar;
