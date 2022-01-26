import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./CursorStyles.css";

const Cursor = () => {
  let cursor = useRef(null);

  useEffect(() => {
    document.addEventListener(
      "mousemove",
      (event) => {
        gsap.to(cursor.current, {
          x: event.pageX,
          y: event.pageY,
          ease: "Power3.ease",
        });
      },
      false
    );
  }, []);

  return (
    <div
      className="cursor"
      ref={cursor}
      style={{
        left: 0,
        top: 0,
      }}
    ></div>
  );
};

export default Cursor;
