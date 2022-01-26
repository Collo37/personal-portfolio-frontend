import { useDispatch } from "react-redux";

import { toggleBar } from "../state/sidebarSlice";

const NavbarLogic = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleBar());
  };
  return {
    toggleSidebar,
  };
};

export default NavbarLogic;
