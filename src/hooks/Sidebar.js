import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleBar } from "../state/sidebarSlice";

const pages = ["Home", "Projects", "About", "Contact"];
const rotatingDivsArray = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const closeIconStyles = {
  position: "absolute",
  display: "block",
  right: 10,
  top: 10,
  width: 30,
  height: 30,
  fill: "white",
  transition: "display 1s ease",
};

const SidebarLogic = () => {
  const sidebarState = useSelector((state) => state.showBar);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowSidebar(sidebarState);
  }, [sidebarState]);

  const toggleSidebar = () => {
    dispatch(toggleBar());
    setShowSidebar(!showSidebar);
  };

  return {
    pages,
    rotatingDivsArray,
    closeIconStyles,
    showSidebar,
    toggleSidebar,
  };
};

export default SidebarLogic;
