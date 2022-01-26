import "./buttonStyles.css";

const Button = ({ text, clicked, filled }) => {
  return (
    <div className="button" onClick={clicked}>
      <svg id="button-svg">
        <rect
          className={filled ? "rectangle-filled" : "rectangle"}
          rx="30"
          ry="30"
          fill={filled ? "#fc7a1e" : "transparent"}
          stroke={filled ? "white" : "#fc7a1e"}
        ></rect>
      </svg>
      <p style={{ color: filled ? "white" : "#fc7a1e" }}>{text}</p>
    </div>
  );
};

export default Button;
