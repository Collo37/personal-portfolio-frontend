import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import MotionDiv from "./components/HOC/MotionDiv";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Project/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
// import Cursor from "./components/UI components/Cursor/Cursor";

import "./App.css";

function App() {
  const showSidebar = useSelector((state) => state.showBar);
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <SideBar state={showSidebar.showBar} />
      {/* <Cursor /> */}
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MotionDiv>
                <Home />
              </MotionDiv>
            }
          />
          <Route
            path="/about"
            element={
              <MotionDiv>
                <About />
              </MotionDiv>
            }
          />
          <Route
            path="/contact"
            element={
              <MotionDiv>
                <Contact />
              </MotionDiv>
            }
          />
          <Route
            path="/projects"
            element={
              <MotionDiv>
                <Projects />
              </MotionDiv>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <MotionDiv>
                <ProjectDetails />
              </MotionDiv>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
