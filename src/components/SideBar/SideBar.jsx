import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Close } from "@mui/icons-material";

import { toggleBar } from "../../state/sidebarSlice";

import SidebarLogic from "../../hooks/Sidebar";
import Routing from "../../hooks/Routing";

import {
  maxOpacity,
  minOpacity,
  twistAnimation,
  reverseTwistAnimation,
  basicShow,
  basicHide,
  fillSvg,
  reverseFillSvg,
} from "../../animations/animations";

import "./SideBarStyles.css";

const SideBar = ({ state }) => {
  let sidebarContainer = useRef(null);

  const { pages, rotatingDivsArray, toggleSidebar } = SidebarLogic();
  const { visitPage } = Routing();
  const dispatch = useDispatch();

  const handleRedirect = (route) => {
    if (route.toLowerCase() !== "home") {
      visitPage(route.toLowerCase());
    } else {
      visitPage("");
    }
    dispatch(toggleBar());
  };

  useEffect(() => {
    maxOpacity(sidebarContainer);
    if (state) {
      maxOpacity("#menu-item");
      basicShow(sidebarContainer, 0.5, "flex");
      basicShow(".close-icon", 0.5, "flex");
      twistAnimation("rotating-div", 90, 0.5, 1);
      fillSvg("#menu-item-text", "white", 1.5, 2);
    } else {
      minOpacity("#menu-item");
      reverseTwistAnimation("rotating-div", -90, 0.5, 1);
      basicHide(sidebarContainer, 0.5, 1);
      basicHide(".close-icon", 0.5);
      reverseFillSvg("#menu-item-text", 1.5, 0);
    }
  }, [state]);

  return (
    <div
      className="sidebar-container"
      ref={(el) => {
        sidebarContainer = el;
      }}
    >
      <div className="sidebar-menu-items">
        {pages.map((page, index) => {
          return (
            <svg
              key={index}
              id="menu-item"
              onClick={() => handleRedirect(page)}
            >
              <text strokeWidth="1" y="50%" id="menu-item-text">
                {page}
              </text>
            </svg>
          );
        })}
      </div>
      {rotatingDivsArray.map((div, index) => {
        return <div id="rotating-div" key={index} />;
      })}
      <Close
        className="close-icon"
        style={{ width: 40, height: 40 }}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default SideBar;
